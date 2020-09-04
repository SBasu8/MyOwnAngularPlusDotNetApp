using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Log.SampleMS.Controllers
{
    [Route("api/samplems")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
       
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "To check admin : /admin", "To check user : /user" };
        }

        // GET: api/<ValuesController>
        [Authorize(Roles = "ADMIN")]
        [HttpGet("admin")]
        public IEnumerable<string> GetAdmin()
        {
            return new string[] { "You are", "ADMIN" };
        }

        [Authorize(Roles = "USER")]
        [HttpGet("user")]
        public IEnumerable<string> GetUser()
        {
            return new string[] { "You are", "USER" };
        }

        // GET api/<ValuesController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<ValuesController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<ValuesController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<ValuesController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
