async function t(){try{let t=await fetch("http://localhost:3000/posts");if(!t.ok)throw Error("Не вдалося отримати пости");return await t.json()}catch(t){return console.log(t),[]}}async function e(t,e){try{let o=await fetch("http://localhost:3000/posts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:t,content:e,comments:[]})});if(!o.ok)throw Error("Не вдалося створити пост");return await o.json()}catch(t){console.log(t)}}async function o(t,e,o,a){try{let n=await fetch(`http://localhost:3000/posts/${t}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:e,title:o,content:a})});if(!n.ok)throw Error("Не вдалося оновити пост");return await n.json()}catch(t){console.log(t)}}async function a(t){try{if(!(await fetch(`http://localhost:3000/posts/${t}`,{method:"DELETE"})).ok)throw Error("Не вдалося видалити пост");return!0}catch(t){return console.log(t),!1}}const n="http://localhost:3000/posts";async function u(t,e){try{let o=await fetch(`${n}/${t}`),a=await o.json(),u=Array.isArray(a.comments)?a.comments:[];u.push({text:e}),await fetch(`${n}/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({comments:u})})}catch(t){console.log(t)}}const s=document.querySelector("#postsContainer"),r=document.querySelector("#createPostForm"),i=document.querySelector("#titleInput"),c=document.querySelector("#contentInput");async function l(){let e=await t();s.innerHTML="",e.forEach(t=>{let e=Array.isArray(t.comments)?t.comments.map(t=>`<li>${t.text}</li>`).join(""):"",o=document.createElement("li");o.innerHTML=`
        <h2 class="user-name">${t.userName||""}</h2>
        <h2 class="user-title">${t.title}</h2>
        <p class="user-content">${t.content}</p>
        <button class="edit-post-btn" id="editPostButton" data-id="${t.id}">\u{420}\u{435}\u{434}\u{430}\u{433}\u{443}\u{432}\u{430}\u{442}\u{438}</button>
        <button class="delete-post-btn" id="deletePostButton" data-id="${t.id}">\u{412}\u{438}\u{434}\u{430}\u{43B}\u{438}\u{442}\u{438}</button>
        <div>
          <h3>\u{41A}\u{43E}\u{43C}\u{435}\u{43D}\u{442}\u{430}\u{440}\u{456}:</h3>
          <ul>
            ${e}
          </ul>
          <form class="create-comment-form" id="createcommentForm" data-id="${t.id}">
            <input type="text" class="comment-input" id="commentInput" placeholder="\u{41D}\u{43E}\u{432}\u{438}\u{439} \u{43A}\u{43E}\u{43C}\u{435}\u{43D}\u{442}\u{430}\u{440}" required>
            <button type="submit" class="add-comment-btn" id="addCommentButton">\u{414}\u{43E}\u{434}\u{430}\u{442}\u{438} \u{43A}\u{43E}\u{43C}\u{435}\u{43D}\u{442}\u{430}\u{440}</button>
          </form>
        </div>
      `,s.appendChild(o)})}r.addEventListener("submit",async t=>{t.preventDefault();let o=i.value.trim(),a=c.value.trim();o&&a&&(await e(o,a),await l(),r.reset())}),s.addEventListener("click",async t=>{if(t.target.classList.contains("delete-post-btn")){let e=t.target.dataset.id;await a(e),await l()}if(t.target.classList.contains("edit-post-btn")){let e=t.target.dataset.id,a=prompt("Нове імя:"),n=prompt("Новий заголовок:"),u=prompt("Новий зміст:");n&&u&&(await o(e,a,n,u),await l())}}),s.addEventListener("submit",async t=>{if(t.target.classList.contains("create-comment-form")){t.preventDefault();let e=t.target.dataset.id,o=t.target.querySelector(".comment-input").value.trim();o&&(await u(e,o),await l())}}),l();
//# sourceMappingURL=practice-20.4.42e5e7bf.js.map
