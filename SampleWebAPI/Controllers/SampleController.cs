using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SampleWebAPI.Controllers
{
    public class SampleController : ApiController
    {
        public string GetTime([FromUri]Person t)
        {
            return string.Format("Received Name: {0}", t.Name);
        }
    }

    public class Person
    {
        public String Name { get; set; }
      
    }
}
