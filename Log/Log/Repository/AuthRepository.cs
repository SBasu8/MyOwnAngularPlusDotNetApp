using Log.Models;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Log.Repository
{
    public class AuthRepository : IRepository<Role>
    {
        private AuthContext context;
        private IConfiguration configuration;

        public AuthRepository(AuthContext context, IConfiguration configuration)
        {
            this.context = context;
            this.configuration = configuration;
        }

        public Tuple<bool, string> Login(string uname, string pass)
        {
            try
            {
                Tuple<bool, string> t;
                var user = context.Role.FirstOrDefault(r => r.Name == uname && r.Password == pass && r.Confirmed);
                if (user == null) t = new Tuple<bool, string>(false, "");
                else
                {
                    var token = GenerateJwtToken(user);
                    t = new Tuple<bool, string>(true, token);
                }
                return t;
            }
            catch (Exception ex) { throw ex; }

        }

        public bool Signup(Role entity)
        {
            try
            {
                context.Role.Add(entity);
                int u = context.SaveChanges();
                if (u > 0) return true;
                else return false;
            }
            catch (Exception) { return false; }

        }



        private string GenerateJwtToken(Role role)
        {
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, role.Email),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.Role, role.RoleType.ToString())
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["JwtKey"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            // recommednded is 5 mins
            var expires = DateTime.Now.AddDays(
                Convert.ToDouble(configuration["JwtExpireDays"]));

            var token = new JwtSecurityToken(
                configuration["JwtIssuer"],
                configuration["JwtIssuer"],
                claims,
                expires: expires,
                signingCredentials: creds
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
