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
    ]
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
      // TODO : Add images
    ],
    desc: '',
    video: {
      // TODO : Add video
      url: ''
    }
  },
  {
    id: '1699a0f8-e43b-5d63-bcf0-7e9f25e92e16',
    type: 'Mahindra Shop',
    name: 'Mahindra Shop',
    location: 'nongmynsong, shillong meghalaya',
    image: [
      'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fimages%2Fexterior%2Fmahindra%20shop%2FGroup%201%20(1).png?alt=media&token=f4e6a3ed-c33b-4766-8fd2-e4c398df995e',
      'https://firebasestorage.googleapis.com/v0/b/shu-v-3833f.appspot.com/o/shu-v1%2Fassets%2Fimages%2Fexterior%2Fmahindra%20shop%2FGroup%201.png?alt=media&token=0c5a7b1d-82d7-4262-a496-9bc843eafe45'
    ],
    category: 'interior'
  }
];
