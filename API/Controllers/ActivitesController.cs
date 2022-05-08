
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Persistent;

namespace API.Controllers
{

    public class ActivitesController : BaseApiController
    {
        private readonly DataContext context;
        public ActivitesController(DataContext context)
        {
            this.context = context;
        }
        [HttpGet]
        public async Task<ActionResult<List<Activity>>> GetActivites()
        {
            return await context.Activities.ToListAsync();

        }

              [HttpGet("{id}")]

         public async Task<ActionResult<Activity>> GetSingleActivites(Guid id)
        {
            return await context.Activities.FindAsync(id);

        }



    }
}
