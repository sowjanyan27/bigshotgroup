

import React from 'react';


const Sidebar = () => {
    return (
        <div className="sidebar">
         
            <ul>
            <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Women
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Kurti</a></li>
            <li><a class="dropdown-item" href="#">Jeggings</a></li>
         
            <li><a class="dropdown-item" href="/Women">Sarees</a></li>
          </ul>
        </li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    );
};

export default Sidebar;
