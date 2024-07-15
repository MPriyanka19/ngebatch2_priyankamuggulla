// import React from 'react'
import { Link, useParams } from 'react-router-dom';

export default function Blogs() {
    const blog = [
      { id: 1, title: "blog1" },
      { id: 2, title: "blog2" },
      { id: 3, title: "blog3" },
    ];
    const { id } = useParams()
    if (!id) {
        return (
          <>
            <div>Blog Home Page</div>

            {blog.map((bl) => (
              <div>
                    <Link to={"/blog/" + bl.id }>{bl.title}</Link>
              </div>
            ))}
          </>
        );
    }
    return (
      <>
            <div>you have selected {id}</div>
            <Link to='/blog'>Back</Link>
            </>
  )
}
