const data =[
    {
        name: 'Parth Chaudhary',
        age: 23,
        gender: 'male',
        lookingfor: 'friends',
        location: 'India',
        image: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
        name: 'Pooja Khatara',
        age: 50,
        gender: 'female',
        lookingfor: 'male',
        location: 'Wakanda',
        image: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
        name: 'Darshan Dave',
        age: 23,
        gender: 'male',
        lookingfor: 'female',
        location: 'USA',
        image: 'https://randomuser.me/api/portraits/men/1.jpg'
    }
];

// initialize profile iterator
const profiles = profileIteraor(data);

// call first profile
nextProfile();

// next click event
document.getElementById('next').addEventListener('click', nextProfile);

// next profile display
function nextProfile() {
    const currProfile = profiles.next().value;

    if(currProfile !== undefined){
        document.getElementById('profileDisplay').innerHTML = `
            <ul class="list-group">
                <li class="list-group-item">Name: ${currProfile.name}</li>
                <li class="list-group-item">Age: ${currProfile.age}</li>
                <li class="list-group-item">Gender: ${currProfile.gender}</li>
                <li class="list-group-item">Looking For: ${currProfile.lookingfor}</li>
                <li class="list-group-item">Location: ${currProfile.location}</li>
            </ul>
        `;

        document.getElementById('imageDisplay').innerHTML = `
        <img src="${currProfile.image}" class="img-fluid img-circle">
        `;
    }else{
        // no more profile
        window.location.reload();
    }
}

// Profile Iterator
function profileIteraor(profiles) {
    let nextIndex = 0;

    return {
        next: function () {
            return nextIndex < profiles.length ?
            { value: profiles[nextIndex++] , done: false } :
            { done: true }
        }
    }
}
