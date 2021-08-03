const posts = [
    {title: "Post One", body: "This is post one."},
    {title: "Post Two", body: "This is post two."}
];

//====== Using Promises ======

function getPosts(){
    setTimeout(() => {
        let output = "";
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });

        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;

             if(!error){
                 resolve();
             }else{
                 reject("Error: Something didn't go right.");
             }

        }, 2000);
    });
}

// createPost({title: "Post Three", body: "This is post three."})
// .then(getPosts)
// .catch(err => console.log(err));

//======= Async/Await ========

// async function init(){
//     await createPost({title: "Post Three", body: "This is post three."});
//     getPosts();
// }

// init();

//======= Async/Await/Fetch ========

async function fetchAlbums(){
    const res = await fetch("https://jsonplaceholder.typicode.com/albums");

    const data = await res.json();

    console.log(data);
}

fetchAlbums();

// ====== Promise.all =======

// const promise1 = Promise.resolve("Hello world");
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, "Goodbye"));
// const promise4 = fetch("https://jsonplaceholder.typicode.com/albums")
// .then(resp => resp.json());

// Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values));




