using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ABSAServices.Models;

namespace ABSAServices.Controllers
{
    public class PhoneBookController : ApiController
    {
        PhoneBookEntities pbContext = new PhoneBookEntities();
        public PhoneBookController()
        {

        }

        // GET api/phoneBook/
        public List<PhoneDetail> Get(string searchText, int searchBy)
        {
            List<PhoneDetail> result = new List<PhoneDetail>();
            if (searchBy == 2)
            {
                long searchNumber = Int64.Parse(searchText);
                result = pbContext.PhoneDetails.Where(t => t.Phone_Number == searchNumber).ToList();
            }
            else if (searchBy == 1)
            {
                result = pbContext.PhoneDetails.Where(t => t.Name == searchText).ToList();
            }
            return result;
        }

        // POST api/phoneBook/
        public bool Post([FromBody]PhoneDetail newPhoneDetails)
        {
            var details = new PhoneDetail()
            {
                Phone_Number = newPhoneDetails.Phone_Number,
                Name = newPhoneDetails.Name,
                Created_Date = newPhoneDetails.Created_Date
            };

            pbContext.PhoneDetails.Add(details);
            if (pbContext.SaveChanges() > 0)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
