let h = document.getElementById("main");

let arr = [
    "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png",
    "https://asset.peoplematters.in/images/0cb7e105-b73b-4336-9d0a-771a99baed85.jpg?w=1024&dpr=2&auto=format,compress",
    "https://i.pinimg.com/236x/f5/31/70/f5317004a5b1a45f3ed5f3d45f03e6ef.jpg",
    "https://i.pinimg.com/736x/34/4e/54/344e54fb3ce99bc3680298fe8305c40f.jpg",
    "https://www.freeiconspng.com/uploads/pokemon-png-7.png",
    "https://img.pokemondb.net/artwork/large/chikorita.jpg",
    " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB_LR01gXM6EpZW62RLWVpfSm04k8oF7qH-g&s"

];

let s = "";
for (let i = 1; i <= 70; i++) {
    let r = Math.floor(Math.random() * arr.length);
    s += ` <div class="card"><img src = ${arr[r]} > </div>`;
}

h.innerHTML = s;

