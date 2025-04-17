// import React, { useEffect, useState } from 'react';

// function Footer() {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const accessToken = 'EAAPL7PIkW8gBO36y8bVBqhXlyf6SkSHVZCdTFrX9UEdhJToJkqTsBZCycXE7AJvM9rZAOKCOXCi9oF1GaGjN54qMe2AFwgyjgzhsMHZCmXccYZBqbkJZCdbVUgp0eOl96zTLFfx2tR1jgTr2FPwp6i0y6cLZCXF5MkJ7UbGJfHbhjdP9vYZBLQs6e7e46NwVpb3ec6gM7Avv9dwOOlmIDb3P';
//   const pageId = '102434979033080';

//   useEffect(() => {
//     const fetchLatestPost = async () => {
//       try {
//         const response = await fetch(
//           `https://graph.facebook.com/${pageId}/posts?fields=id,message,created_time,permalink_url,attachments{media_type,media,url}&access_token=${accessToken}`
//         );
//         const data = await response.json();
        
//         if (data.data && data.data.length > 0) {
//           setPosts(data.data); // Store all posts
//         } else {
//           setError('No posts available');
//         }
//         setLoading(false);
//       } catch (err) {
//         setError('Failed to load data');
//         setLoading(false);
//         console.error(err);
//       }
//     };

//     fetchLatestPost();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div>
//       <h3>Latest Facebook Posts</h3>
//       {posts.map((post, postIndex) => (
//         <div key={postIndex} style={{ marginBottom: '30px', border: '1px solid #ddd', padding: '15px' }}>
//           {/* Post Message */}
//           {post.message && <p>{post.message}</p>}

//           {/* Attachments (Images/Videos) */}
//           {post.attachments?.data.map((attachment, attachmentIndex) => {
//             switch (attachment.media_type) {
//               case 'photo':
//                 return (
//                   <div key={attachmentIndex}>
//                     <img 
//                       src={attachment.media?.image?.src} 
//                       alt="Post attachment" 
//                       style={{ maxWidth: '100%', marginTop: '10px' }}
//                     />
//                   </div>
//                 );
//               case 'video':
//                 return (
//                   <div key={attachmentIndex}>
//                     <video controls style={{ maxWidth: '100%', marginTop: '10px' }}>
//                       <source src={attachment.media?.source} type="video/mp4" />
//                       Your browser doesn't support videos.
//                     </video>
//                   </div>
//                 );
//               case 'link':
//                 return (
//                   <div key={attachmentIndex}>
//                     <a href={attachment.url} target="_blank" rel="noopener noreferrer">
//                       {attachment.url}
//                     </a>
//                   </div>
//                 );
//               default:
//                 return null;
//             }
//           })}

//           {/* Facebook Embed */}
//           <iframe
//             src={`https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(
//               post.permalink_url
//             )}&show_text=true&width=500`}
//             width="500"
//             height="328"
//             style={{ border: 'none', overflow: 'hidden', marginTop: '10px' }}
//             scrolling="no"
//             title={`Facebook Post ${postIndex}`}
//             allowFullScreen={true}
//           ></iframe>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Footer;


import React, { useEffect, useState } from 'react';

function Footer() {
  const [latestPost, setLatestPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const accessToken = 'EAAPL7PIkW8gBO36y8bVBqhXlyf6SkSHVZCdTFrX9UEdhJToJkqTsBZCycXE7AJvM9rZAOKCOXCi9oF1GaGjN54qMe2AFwgyjgzhsMHZCmXccYZBqbkJZCdbVUgp0eOl96zTLFfx2tR1jgTr2FPwp6i0y6cLZCXF5MkJ7UbGJfHbhjdP9vYZBLQs6e7e46NwVpb3ec6gM7Avv9dwOOlmIDb3P';
  const pageId = '102434979033080';

  useEffect(() => {
    const fetchLatestPost = async () => {
      try {
        const response = await fetch(
          `https://graph.facebook.com/${pageId}/posts?fields=id,message,created_time,permalink_url,attachments{media_type,media,url}&access_token=${accessToken}&limit=1`
        );
        const data = await response.json();
        
        if (data.data && data.data.length > 0) {
          setLatestPost(data.data[0]); // Store only the first (latest) post
        } else {
          setError('No posts available');
        }
        setLoading(false);
      } catch (err) {
        setError('Failed to load data');
        setLoading(false);
        console.error(err);
      }
    };

    fetchLatestPost();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!latestPost) {
    return <div>No post found</div>;
  }

  return (
    <div>
      <h3>Latest Facebook Post</h3>
      <div style={{ marginBottom: '30px', border: '1px solid #ddd', padding: '15px' }}>
        {/* Post Message */}
        {latestPost.message && <p>{latestPost.message}</p>}

        {/* Attachments (Images/Videos) */}
        {latestPost.attachments?.data.map((attachment, index) => {
          switch (attachment.media_type) {
            case 'photo':
              return (
                <div key={index}>
                  <img 
                    src={attachment.media?.image?.src} 
                    alt="Post attachment" 
                    style={{ maxWidth: '100%', marginTop: '10px' }}
                  />
                </div>
              );
            case 'video':
              return (
                <div key={index}>
                  <video controls style={{ maxWidth: '100%', marginTop: '10px' }}>
                    <source src={attachment.media?.source} type="video/mp4" />
                    Your browser doesn't support videos.
                  </video>
                </div>
              );
            case 'link':
              return (
                <div key={index}>
                  <a href={attachment.url} target="_blank" rel="noopener noreferrer">
                    {attachment.url}
                  </a>
                </div>
              );
            default:
              return null;
          }
        })}

        {/* Facebook Embed */}
        <iframe
          src={`https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(
            latestPost.permalink_url
          )}&show_text=true&width=500`}
          width="500"
          height="328"
          style={{ border: 'none', overflow: 'hidden', marginTop: '10px' }}
          scrolling="no"
          title="Latest Facebook Post"
          allowFullScreen={true}
        ></iframe>
      </div>
    </div>
  );
}

export default Footer;