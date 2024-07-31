export type ProjectType = {
  id: string;
  name: string;
  type: string;
  image: string[];
  location: string;
  category?: 'event' | 'project' | 'interior' | 'education';
  desc?: string;
  video?: {
    url: string;
  };
};

export const shuProjects: ProjectType[] = [
  // PROJECTS
  {
    id: '6a4ba8a6-b64a-5094-9fc4-83553752622a',
    type: 'residential design',
    name: 'Design',
    location: 'Nongstoin nongpyndeng, West Khasi Hills District',
    desc: '',
    image: [
      'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fimages%2Fexterior%2Fnongstoin%20residential%2FGroup%201.png?alt=media&token=054799b8-75a6-42e8-b8de-8ded045757a5'
    ],
    category: 'project',
    video: {
      url: 'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fvideos%2FNONGSTOIN_compress_2.mp4?alt=media&token=ca64fff6-d588-49d7-a350-b0fd8083921a'
    }
  },
  {
    id: '8e01da17-9491-5931-b994-dad12599074b',
    type: 'residential design',
    name: 'Design',
    location: 'Langkyrding, shillong meghalaya',
    desc: 'This project involves designing a renovation house that seamlessly integrates contemporary elements. The design offers two distinct options, each embodying modern architectural principles. Both options aim to enhance functionality and aesthetic appeal, creating a harmonious blend of the existing structure with contemporary design',
    image: [
      'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fimages%2Fexterior%2Flangkyrding%2FGroup%201%20(1).png?alt=media&token=ecb6e7b7-385c-4966-88c8-76a495c92248',
      'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fimages%2Fexterior%2Flangkyrding%2FGroup%201.png?alt=media&token=0bf9504e-4676-4b17-83f9-e9b918404884'
    ],
    category: 'project'
  },
  {
    id: '96c575f4-af3e-5e44-beea-cbcdf12bc1a1',
    type: 'banquet Hall Design',
    category: 'project',
    name: 'Design',
    image: [
      'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fimages%2Fexterior%2FBANQUET%20HALL%2FGroup%201.png?alt=media&token=b00142f8-2bb6-446f-940f-74b5dcfaa839'
    ],
    location: 'nongmynsong, shillong meghalaya',
    desc: 'This project involves transforming an existing building into a banquet hall, focusing on creating an inviting and functional event space. The design will integrate architectural elements that enhance the environment, making it ideal for hosting events such as weddings and receptions. The goal is to seamlessly blend aesthetic appeal with practical functionality, ensuring the space meets the needs of diverse functions while providing an exceptional experience for guests.'
  },
  {
    id: '90a1388c-022e-509e-9eca-de9f47508ebf',
    type: 'residential design',
    name: 'design',
    location: 'Mairang, Bynther, Eastern West khasi hills district',
    image: [
      'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fimages%2Fexterior%2Fmairang%2FGroup%201.png?alt=media&token=0b7a4956-bff3-4576-9c68-710dd45ef0a7',
      'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fimages%2Fexterior%2Fmairang%2FGroup%201%20(1).png?alt=media&token=0bc3367c-7b45-434c-8dc9-d58128797379',
      'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fimages%2Fexterior%2Fmairang%2FGroup%201%20(2).png?alt=media&token=5956cf81-95f4-4a14-8de8-54a21201dad3'
    ],
    category: 'project',
    desc: 'This project draws inspiration from contemporary design principles, seamlessly integrating with the existing site. The final product reflects a harmonious blend of modern aesthetics and the surrounding environment, creating a cohesive architectural statement'
  },
  {
    id: 'a9a20d0d-1946-5734-b2bf-d9192458169e',
    type: 'bakery & rooftop restuarant design',
    name: 'design',
    location: 'nongstoin nongpyndeng, west khasi hills district ',
    // desc: 'Crafted a dynamic portfolio website showcasing my skills and projects using Tailwind CSS, Next.js, and Vercel. Seamlessly deployed for optimal performance and accessibility.',
    video: {
      url: 'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fvideos%2FRESTAURANT_compress_2.mp4?alt=media&token=b2eab41f-3265-49a3-9549-44a9a2a0d883'
    },
    image: [
      'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fimages%2Fexterior%2Fnongstoin%20restuarant%2FGroup%201%20(1).png?alt=media&token=30786b03-186d-4213-b4fd-0356f8e18c29',
      'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fimages%2Fexterior%2Fnongstoin%20restuarant%2FGroup%201.png?alt=media&token=ccfccd01-aefb-40e4-95aa-082e9a8106e5'
    ],
    category: 'project',
    desc: "This project showcases an integrated architectural design that seamlessly combines a rooftop restaurant on the upper level with a terrace and a bakery on the ground floor. This design harmoniously blends form and function to meet the client's requirements, resulting in a cohesive and innovative space that enhances the user experience"
  },
  {
    id: 'b448ef80-d159-5a68-b4a2-8ad0c9724d3a',
    type: 'The Retreat design',
    name: 'Design',
    video: {
      url: 'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fvideos%2FTHE%20RETREAT_compress_3.mp4?alt=media&token=c6fdd664-c0c6-406e-944f-a3f7364bed61'
    },
    location: 'Langkawet pynursla, shillong meghalaya',
    image: [
      'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fimages%2Fexterior%2FTHE%20RETREAT%20LANGKAWET%20PYNURSLA%2FGroup%201%20(1).png?alt=media&token=9900c6b0-d5e7-47b6-8579-5d1148c714c7',
      'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fimages%2Fexterior%2FTHE%20RETREAT%20LANGKAWET%20PYNURSLA%2FGroup%201.png?alt=media&token=4b74999d-f901-4185-a594-d9d7478e3ab7'
    ],
    category: 'project',
    desc: "This retreat project incorporates the architectural design of traditional structures in Meghalaya, aiming to transport guests to a bygone era. It seamlessly blends serene landscapes with authentic traditional materials, creating an immersive experience that captures the essence of the region's heritage"
  },
  {
    id: '1fba8475-9016-512a-8ffe-8bce0eff5a50',
    type: 'Cultural Event Design',
    name: 'Design',
    location: 'Umiam Ri-Bhoi, meghalaya',
    desc: 'This project aims to design a music festival from an architectural perspective, incorporating all necessary elements and requirements for a successful and engaging event experience',
    image: [
      'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fimages%2Fexterior%2Fevent%20design%2FGroup%201%20(1).png?alt=media&token=0b9c5f6a-7286-4faa-88dd-646f6c891c20',
      'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fimages%2Fexterior%2Fevent%20design%2FGroup%201%20(2).png?alt=media&token=de28b607-be2c-4a2a-b003-94afec2ef277',
      'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fimages%2Fexterior%2Fevent%20design%2FGroup%201%20(3).png?alt=media&token=38c00a7a-0591-49ef-995e-e091efe95a59',
      'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fimages%2Fexterior%2Fevent%20design%2FGroup%201%20(4).png?alt=media&token=c918438c-1f03-4ca1-b48f-96d4c1b588df',
      'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fimages%2Fexterior%2Fevent%20design%2FGroup%201%20(5).png?alt=media&token=da8a0ab5-291a-4fc4-8b02-dcf6613acb87',
      'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fimages%2Fexterior%2Fevent%20design%2FGroup%201.png?alt=media&token=ce861f2d-fe72-4495-aebd-1ee91b30d133'
    ],
    category: 'event',
    video: {
      url: 'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fvideos%2FEvent 1_compress_2.mp4?alt=media&token=6c1a1bf3-6da1-444c-945a-2079e5dd6506'
    }
  },
  {
    id: '5096b85d-0472-506f-aeaf-70e0fc88f573',
    type: 'Exihibition booth Design',
    name: 'Design',
    location: 'New Delhi, India',
    desc: 'This project involves designing an exhibition booth specifically for showcasing a Meghalaya fruit wine shop. The architectural design focuses on creating an engaging and aesthetically pleasing space that effectively organizes event elements to highlight the unique qualities of the fruit wines',
    image: [
      'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fimages%2Fexterior%2Fexhibition%20design%2FGroup%201%20(1).png?alt=media&token=7b7e7486-a2b1-4e34-b0f1-3dfa861bba6c',
      'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fimages%2Fexterior%2Fexhibition%20design%2FGroup%201.png?alt=media&token=b59ac38a-5e76-4fe2-8f6b-36588546dfee'
    ],
    category: 'event',
    video: {
      url: 'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fvideos%2FEXHIBITION BOOTH_compress_3.mp4?alt=media&token=9cfe9f63-c20c-436b-b723-dcce4b235d5b'
    }
  },
  {
    id: '5096b85d-0472-506sf-aeaf-70e0fc88f573',
    type: 'Cultural Event Design',
    name: `monolith festival '24`,
    location: 'Maphlang, shillong meghalaya',
    desc: "The project involves creating a zoning layout for a monolith festival held in Mawphlang, integrating various design elements such as stage and shop designs. It incorporates traditional Khasi architectural motifs, blending them seamlessly into the festival's overall design",
    video: {
      url: 'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fvideos%2FMONOLITH_compress_1.mp4?alt=media&token=8e842cb0-89f3-4f52-8aa1-39977b8a3154'
    },
    image: [
      'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fimages%2Fexterior%2Fmonolith%2FGroup%201%20(1).png?alt=media&token=a31c7b88-f7ca-439a-a386-2839228cab5b',
      'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fimages%2Fexterior%2Fmonolith%2FGroup%201.png?alt=media&token=d0cf7120-6957-4c97-943d-984137ff7b94'
    ],
    category: 'event'
  },
  // interior projects
  {
    id: '10',
    type: 'Living Room',
    name: 'Design',
    location: 'Upper Mawprem, shillong meghalaya',
    image: [
      'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fimages%2Fexterior%2Fupper%20mawprem%2FGroup%201%20(2).png?alt=media&token=616615fc-acc2-4a94-96c4-67047f2b25ea',
      'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fimages%2Fexterior%2Fupper%20mawprem%2FGroup%201%20(1).png?alt=media&token=f49691bf-f8d1-4192-8b76-bf0ff9d89cf9'
    ],
    video: {
      url: 'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fvideos%2FINTERIOR UPPER MAWPREM_compress_1.mp4?alt=media&token=04c64bb8-4d09-41ee-a5f8-e9808b6fc33b'
    },
    category: 'interior'
  },
  {
    id: '11',
    name: 'Design',
    type: 'Toilet cum bathroom',
    location: 'Upper Mawprem, shillong meghalaya',
    category: 'interior',
    image: [
      'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fimages%2Fexterior%2Fupper%20mawprem%2FGroup%201.png?alt=media&token=39eeaf2d-54f5-4a4a-9d63-83b0b4d426b1',
      'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fimages%2Fexterior%2Fupper%20mawprem%2FGroup%201%20(5).png?alt=media&token=cb56ffcc-4f59-4f09-a7cc-77757ea94567'
    ]
  },
  {
    id: '12',
    name: 'Design',
    type: 'Master Bedroom',
    location: 'Upper Mawprem, shillong meghalaya',
    category: 'interior',
    image: [
      'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fimages%2Fexterior%2Fupper%20mawprem%2FGroup%201%20(4).png?alt=media&token=077e04c7-b2e5-443e-be94-a142ca99d8a9',
      'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fimages%2Fexterior%2Fupper%20mawprem%2FGroup%201%20(3).png?alt=media&token=97d180a0-77b9-4617-b9e5-e50eba1e8d5e'
    ],
    video: {
      url: 'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fvideos%2FBEDROOM_compress_1.mp4?alt=media&token=a7c3826d-7737-4165-b5dd-4ac4eb913031'
    }
  },
  {
    image: [
      'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fimages%2Finterior%2FBANQUET%20HALL%2FGroup%201%20(1).png?alt=media&token=33980607-ad1f-4c27-a08b-0772aeb486d5'
    ],
    id: 'asdfdsfsdfsaf',
    name: 'Design',
    type: 'Banquet Hall',
    location: 'Nongmynsong, shillong meghalaya',
    category: 'interior',
    video: {
      url: 'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fvideos%2FBANQUET HALL_compress_3.mp4?alt=media&token=c54490a1-76c4-4a38-995d-f00f60bf227e'
    }
  },
  {
    id: '5',
    type: 'Kitchen',
    name: 'Design',
    location: 'Langkyrding, shillong meghalaya',
    image: [
      'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fimages%2Fexterior%2Flangkyrding%202%2FGroup%201%20(1).png?alt=media&token=d6a7cafd-777f-4ebe-9930-82883e3161d7',
      'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fimages%2Fexterior%2Flangkyrding%202%2FGroup%201.png?alt=media&token=0ab44356-21b7-4ec8-b44a-d90826eac1bd'
    ],
    category: 'interior',
    video: {
      url: 'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fvideos%2FINTERIOR KITCHEN_compress_2.mp4?alt=media&token=c8718629-01bf-472d-9cca-224bcad09474'
    }
  },
  {
    id: '13',
    type: 'Living Room',
    name: 'design',
    category: 'interior',
    location: 'Nongstoin nongpyndeng, West khasi hills district',
    image: [
      'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fimages%2Finterior%2Fliving%20room%2FGroup%201%20(1).png?alt=media&token=a4683631-ea88-4bb0-a1cd-2b93548e3324'
    ]
  },
  {
    id: 'intesfasdfasfdsd',
    category: 'interior',
    location: 'Mawprem, shillong meghalaya',
    type: 'Common Room',
    image: [
      'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fimages%2Finterior%2Fmawprem%20living%20room%2FGroup%201%20(1).png?alt=media&token=cf5a0372-a387-4ad6-9065-51948719e36e',
      'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fimages%2Finterior%2Fmawprem%20living%20room%2FGroup%201%20(2).png?alt=media&token=8549f4e0-8c63-4430-81e4-7f742d159892',
      'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fimages%2Finterior%2Fmawprem%20living%20room%2FGroup%201.png?alt=media&token=f4d7dfec-8a2c-488f-8c06-932aae8d2323'
    ],
    name: 'design'
  },
  {
    id: '1699a0f8-e43b-5d63-bcf0-7e9f25e92e16',
    type: 'Mahindra Shop Spare Parts',
    name: 'design',
    location: 'Mylliem, shillong meghalaya',
    image: [
      'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fimages%2Fexterior%2Fmahindra%20shop%2FGroup%201%20(1).png?alt=media&token=f4e6a3ed-c33b-4766-8fd2-e4c398df995e',
      'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fimages%2Fexterior%2Fmahindra%20shop%2FGroup%201.png?alt=media&token=0c5a7b1d-82d7-4262-a496-9bc843eafe45'
    ],
    category: 'interior'
  },
  // EDUCATION
  {
    id: '534gfdgdffdgfdgdfsrew',
    name: 'design',
    type: 'Transcendence space architectural response to biblical prophocies',
    location: 'Laitryngew sohra, shillong meghalaya',
    video: {
      url: 'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fvideos%2FTHESIS_compress_1.mp4?alt=media&token=901c92aa-7b98-414c-9c2b-7c9610554701'
    },
    category: 'education',
    image: [
      'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fimages%2Feducation%2Fthesis%2Fsite%20plan%2FGroup%201.png?alt=media&token=530dbb6d-128f-45c6-93a0-599588b193c2',
      'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fimages%2Feducation%2Fthesis%2Fchapel%2FGroup%201%20(1).png?alt=media&token=752f7b0c-78a6-40c3-a107-629be7a76bb9',
      'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fimages%2Feducation%2Fthesis%2Fchapel%2FGroup%201%20(2).png?alt=media&token=f7365c2d-3042-40e4-96eb-4c171cfe441a',
      'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fimages%2Feducation%2Fthesis%2Fchapel%2FGroup%201%20(3).png?alt=media&token=ee1c9713-f11f-47db-82d3-81e762bb9065',
      'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fimages%2Feducation%2Fthesis%2Fchapel%2FGroup%201.png?alt=media&token=730ad1aa-58db-473e-8de6-925110ede200',
      'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fimages%2Feducation%2Fthesis%2Fcouncelling%20center%2FGroup%201%20(1).png?alt=media&token=23e80283-6a5c-4311-8a60-93a9aba2bb39',
      'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fimages%2Feducation%2Fthesis%2Fcouncelling%20center%2FGroup%201%20(2).png?alt=media&token=c8d466e3-7907-4ad8-ba67-f75cc8a87930',
      'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fimages%2Feducation%2Fthesis%2Fcouncelling%20center%2FGroup%201%20(3).png?alt=media&token=724e209d-1bc1-4688-a5c5-1be5ac0b2aa2',
      'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fimages%2Feducation%2Fthesis%2Fcouncelling%20center%2FGroup%201%20(4).png?alt=media&token=e6dbfe53-1d3b-4128-8dac-9c52df4f06bb',
      'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fimages%2Feducation%2Fthesis%2Fcouncelling%20center%2FGroup%201.png?alt=media&token=3435a51e-2d4a-4d8a-8ef1-b2cfa38ee305',
      'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fimages%2Feducation%2Fthesis%2Fhostel%2FGroup%201%20(1).png?alt=media&token=da852dac-dcf5-4f20-b715-264bbfe31044',
      'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fimages%2Feducation%2Fthesis%2Fhostel%2FGroup%201.png?alt=media&token=c530ade7-6406-4715-9f6d-d269d50d6604',
      'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fimages%2Feducation%2Fthesis%2Fmuseum%2FGroup%201%20(1).png?alt=media&token=bf87d998-6604-4804-80e4-527327177af6',
      'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fimages%2Feducation%2Fthesis%2Fmuseum%2FGroup%201.png?alt=media&token=2885e62e-1f45-4c28-b6d9-2bdb757e5f0d',
      'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fimages%2Feducation%2Fthesis%2Fmuseum%2FGroup%201%20(2).png?alt=media&token=efec6c4d-892f-4ebc-a392-910e71dda44b',
      'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fimages%2Feducation%2Fthesis%2Fprayer%20garden%2FGroup%201%20(1).png?alt=media&token=c6f1e2f7-9902-497f-ad54-a0dc99a69cae',
      'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fimages%2Feducation%2Fthesis%2Fprayer%20garden%2FGroup%201%20(2).png?alt=media&token=11a4f90e-d787-4365-b1e7-6277e4fb6bb5',
      'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fimages%2Feducation%2Fthesis%2Fprayer%20garden%2FGroup%201.png?alt=media&token=010c5455-d87a-4699-918c-b265087794e5',
      'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fimages%2Feducation%2Fthesis%2Fquater%2FGroup%201%20(1).png?alt=media&token=beced7af-7066-41a7-9550-6b78d695bba9',
      'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fimages%2Feducation%2Fthesis%2Fquater%2FGroup%201.png?alt=media&token=7ebc8a3f-3a48-4e36-baa4-8f0689a29fba',
      'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fimages%2Feducation%2Fthesis%2Fsite%20plan%2FGroup%201%20(1).png?alt=media&token=cca15e89-ba26-4cf8-bff7-24df3f6847ba',
      'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fimages%2Feducation%2Fthesis%2Fsite%20plan%2FGroup%201%20(2).png?alt=media&token=70822a22-c001-4de5-b861-142fe5a27df3',
      'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fimages%2Feducation%2Fthesis%2Fsite%20plan%2FGroup%201%20(3).png?alt=media&token=bf0739fd-7fe4-48d2-93e9-64d9f357cf57'
    ]
  },
  {
    id: 'sdfs32432fsdfsdf',
    name: 'Design',
    type: 'Landscape',
    location: 'Smith, shillong meghalaya',
    category: 'education',
    image: [
      'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fimages%2Feducation%2Flandscape%2FGroup%201%20(1).png?alt=media&token=effe36fd-c7fd-41d7-b9bf-01c886d7b30d',
      'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fimages%2Feducation%2Flandscape%2FGroup%201%20(2).png?alt=media&token=28bd2878-dd77-4951-82e5-4e042f617e24',
      'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fimages%2Feducation%2Flandscape%2FGroup%201%20(3).png?alt=media&token=77011848-be61-41d6-ad29-5841783f4594',
      'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fimages%2Feducation%2Flandscape%2FGroup%201%20(4).png?alt=media&token=a3f6ffc2-8494-48f1-9e98-43c852af2ecf',
      'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fimages%2Feducation%2Flandscape%2FGroup%201%20(5).png?alt=media&token=afe2ae5a-0568-4761-b9dc-931348ae5c66',
      'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fimages%2Feducation%2Flandscape%2FGroup%201.png?alt=media&token=7a525296-2d11-4c75-8684-32f4402d6354'
    ]
  },
  {
    id: 'dfasdfsdf12312fasfsd',
    name: 'Design',
    type: 'Product Design',
    category: 'education',
    location: 'N/A',
    image: [
      'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fimages%2Feducation%2Fproduct%20design%2F1shupd.jpg?alt=media&token=07db5f17-0181-4ac4-b161-ce133b4a41b1',
      'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fimages%2Feducation%2Fproduct%20design%2F2SHUPD.jpg?alt=media&token=a78e264e-29b0-4c6b-8a7b-c7d94ebaaa2c'
    ]
  },
  {
    id: 'fghddegsg1234146423a',
    name: 'Design',
    type: 'Urban design',
    category: 'education',
    location: 'Guwahati assam',
    video: {
      url: 'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fvideos%2FGUWAHATI.mp4?alt=media&token=b63e4f9f-9ca9-4649-87cc-8b33e8a2929b'
    },
    image: [
      'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fimages%2Feducation%2Furban%20design%2FGroup%201%20(1).png?alt=media&token=1a0661d7-50c1-41fe-a585-804e8638239b',
      'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fimages%2Feducation%2Furban%20design%2FGroup%201.png?alt=media&token=792736dd-5d0a-4fd6-98ab-7f84d91edbf5'
    ]
  },
  {
    id: 'asdfsadgasdgsf34234234xcxbcvb',
    name: 'Design',
    type: 'Urban design',
    video: {
      url: 'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fvideos%2FHARIJAN COLONY.mp4?alt=media&token=b31b609c-2c66-46de-b8bd-2ecd5bba2fbf'
    },
    category: 'education',
    location: 'Harijan Colony, shillong meghalaya',
    image: [
      'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fimages%2Feducation%2Furban%20design%202%2FGroup%201%20(1).png?alt=media&token=1e619f50-a602-4b7c-b97e-3d3b80b07518',
      'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fimages%2Feducation%2Furban%20design%202%2FGroup%201.png?alt=media&token=2a57ad1f-9d48-4937-8b98-b06d1dd29a1a'
    ]
  }
];
