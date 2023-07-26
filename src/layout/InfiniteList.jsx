// import { useEffect } from "react";

// function InfiniteList(props) {
//     useEffect(()=> {
//         getData();
//     },[]);

//     const getData = () => {
//         fetch('http://dog.ceo/api/breeds/image/random/15')
//         .then(res => {
//             return !res.ok
//             ? res.json().then(e => Promise.reject(e)) 
//             : return res.json()
//         })
//     }
// }


import React, { useEffect, useRef } from "react";

const InfiniteScroll = ({
  children,
  loader,
  fetchMore,
  hasMore,
  endMessage,
  className,
}) => {
  const pageEndRef = useRef(null);
  useEffect(() => {
    if (hasMore) {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) { // kiểm tra element có nằm trong viewport không?
          fetchMore();
        }
      });

      if (pageEndRef.current) {
        observer.observe(pageEndRef.current);
      }

      return () => {
        if (pageEndRef.current) {
          observer.unobserve(pageEndRef.current);
        }
      };
    }
  }, [hasMore]);
  return (
    <div className={className}>
      {children}

      {hasMore ? <div ref={pageEndRef}>{loader}</div> : endMessage}
    </div>
  );
};

export default InfiniteScroll;

