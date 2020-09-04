using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Log.AuthService.Models;
using Log.Models;
using Log.Repository;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Log.Controllers
{
    [Route("api/authms")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private IRepository<Role> repository;

        public AuthController(Repository.IRepository<Role> repository)
        {
            this.repository = repository;
        }


        [HttpGet("login")]
        public IActionResult Login(string uname, string pass)
        {
            if (!(string.IsNullOrEmpty(uname) || string.IsNullOrEmpty(pass)))
            {
                try
                {
                    var t = repository.Login(uname, pass);
                    if (t.Item1) return Ok(new TokenDetails() { Name=uname,Token = t.Item2 });
                    else return StatusCode(500, "Invalid Creds");
                }
                catch (Exception) { return BadRequest("Internal Server Error"); }
            }
            else return BadRequest("Enter Creds");
        }

        // POST api/<Authontroller>
        [HttpPost("signup")]
        public IActionResult Signup([FromForm] Role role)
        {
            if (ModelState.IsValid)
            {
                var isAdded = repository.Signup(role);
                if (isAdded) return Ok();
                else return StatusCode(500, "Internal Server Error");
            }
            else return BadRequest();
        }

        // PUT api/<Authontroller>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<Authontroller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
