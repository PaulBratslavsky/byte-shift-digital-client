import React from "react";
function shareLinks() {
  return (
    <div class='flex gap-6 flex-col items-center mt-26'>
      <a
        href={`https://twitter.com/intent/tweet?url=${window?.location?.href}`}
        class='max-w-full inline-block'>
        <img
          src='/image/blogpage/twitter.svg'
          height={25}
          width={25}
          alt={"twitter"}
        />
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${window?.location?.href}`}
        class='max-w-full inline-block'>
        <img
          src='/image/blogpage/fb.svg'
          height={25}
          width={25}
          alt={"Facebook"}
        />
      </a>
      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${window?.location?.href}`}
        class='max-w-full inline-block'>
        <img
          src='/image/blogpage/linked.svg'
          height={25}
          width={25}
          alt={"LinkedIn"}
        />
      </a>
    </div>
  );
}

export default shareLinks;
