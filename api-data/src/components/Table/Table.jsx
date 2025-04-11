import React,{useState , useEffect} from 'react';

const Table = () =>{
    const [myPosts , setMyPosts]= useState([]);

    useEffect(() =>{
        getPosts();
    },[])

    async function getPosts() {
        const response = await fetch ('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        console.log(data);

        setMyPosts(data);
    }

    return(
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Descripition</th>
      <th scope="col">Body</th>
    </tr>
  </thead>
  <tbody>
    {
        myPosts.length>0?
          myPosts.map((post)=>(

            <tr key={post.id} >
                <th scope='row'>{post.id}</th>
                <td>{post.title}</td>
                <td>{post.body}</td>
            </tr>

          )):<>nodata</>
        }
   
  </tbody>
</table>

)
 
}


export default Table
