using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Log.Repository
{
    public interface IRepository<T>
    {
        Tuple<bool, string> Login(string uname, string pass);
        bool Signup(T entity);
        
    }
}
