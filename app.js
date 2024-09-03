function setFanSpeed(speed) {
    const fan = document.getElementById('fan');

    if (speed === 1) {
        fan.style.animationDuration = '0.2s';
    } else if (speed === 2) {
        fan.style.animationDuration = '0.7s';
    } else if (speed === 3) {
        fan.style.animationDuration = '1s';
    } else {
        fan.style.animationDuration = '0s'; 
    }
}


// class User {
//     constructor(data) {
//         this.cat = data.category;
//         this.desc = data.description;
//         this.img = data.image;
//         this.Rs = data.price;
//     }
// }

// const dataresponse = async () => {
//     try {
//         let data = await fetch("https://fakestoreapi.com/products");
//         let response = await data.json();
//         console.log(response)
//         const updateddata = response.map(user => new User(user));
//         console.log(updateddata); 
//         return updateddata;
//     } catch (error) {
//         console.log("unable to fetch data", error);
//     }
// };

// dataresponse();



