using Microsoft.AspNetCore.Mvc;
using mission14API.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace mission14API.Controllers
{

    [ApiController]
    [Route("[controller]")]

    public class MovieController : Controller
    {
        private MovieDbContext context;
        public MovieController(MovieDbContext temp)
        {
            context = temp;
        }
        public IEnumerable<Movie> Get()
        {
            var x = context.Movies.ToArray();

            return x;
        }
    }
}
