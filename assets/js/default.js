// const products = localStorage.getItem("");
// if (!products) {
//   localStorage.setItem(
//     "users",
//     JSON.stringify([
//       {
//         name: "sarasu Men  pg",
//         fecilities: {
//           food: "https://iili.io/HXMbdX4.png",
//           parking: "https://iili.io/HXMtHan.png",
//           wifi: "https://iili.io/HXMtAwx.png",
//           tv: "https://iili.io/HXVHLLG.png",
//           fridge: "https://iili.io/HXMDt1I.png",
//         },
//         period: "1 month",
//         available: "Boys",
//         beds: "50",
//         amount: "5000/-",
//         time: "11:00pm",
//         address:
//           " 27, Rani Ammal St, Periyar Nagar, Tharamani, Chennai, Tamil Nadu 600113",
//         single: false,
//         twin: false,
//         triple: false,
//         four: false,
//         owner_id: "vasumeenu2004@gmail.com",
//         sharing: {
//           onesharing: "8000/-",
//           twosharing: "7000",
//           threesharing: "6000",
//           foursharing: "5000",
//         },
//         image: "https://i.ibb.co/CmWbQNn/2.jpg",
//         my_uuid: "8eb13e50-e943-47f6-9b71-c7bbac662333",
//         house_fecilities_image: {
//           image1: "https://iili.io/HhzX8Ex.jpg",
//           image2: "https://iili.io/HhzSkAv.jpg",
//           lastimage: "https://iili.io/HhzUTJa.jpg",
//           image4: "https://iili.io/HhCkGyP.jpg",
//         },
//       },
//       {
//         name: "Prabhakaran's Paying Guest",
//         fecilities: {
//           food: "https://i.ibb.co/X3LSTXV/cooking.jpg",
//           parking: "https://iili.io/HXMtHan.png",
//           wifi: "https://iili.io/HXMtAwx.png",
//           tv: "https://iili.io/HXVHLLG.png",
//           fridge: "https://iili.io/HXMDt1I.png",
//         },
//         period: "1 month",
//         available: "Boys",
//         beds: "50",
//         amount: "4500/-",
//         time: "11:00pm",
//         address:
//           " 63, 4th Main Rd, CBI Colony, Perungudi, Chennai, Tamil Nadu 600096",
//         single: false,
//         twin: false,
//         triple: false,
//         four: false,
//         owner_id: "vasumeenu2004@gmail.com",
//         sharing: {
//           onesharing: "8000/-",
//           twosharing: "7500/-",
//           threesharing: "6000/-",
//           foursharing: "5500/-",
//         },
//         image: "https://i.ibb.co/0sscNLn/background.jpg",
//         my_uuid: "74388615-263b-406b-8b7f-226af28bd4b4",
//         house_fecilities_image: {
//           image1: "https://i.ibb.co/27y8tf6/balkeni7.jpg",
//           image2: "https://i.ibb.co/1rzBJJS/balkeni3.jpg",
//           lastimage: "https://iili.io/HhzUTJa.jpg",
//           image4: "https://iili.io/HhCkGyP.jpg",
//         },
//       },
//       {
//         name: "KK PG FOR BOYS AT AMBATTUR",
//         fecilities: {
//           food: "https://iili.io/HXMbdX4.png",
//           parking: "https://iili.io/HXMtHan.png",
//           wifi: "https://iili.io/HXMtAwx.png",
//           tv: "https://iili.io/HXVHLLG.png",
//           fridge: "https://iili.io/HXMDt1I.png",
//         },
//         period: "15 days before",
//         available: "Boys",
//         beds: "60",
//         amount: "5000/-",
//         time: "11:30pm",
//         address:
//           "No: 5, Aringar Anna, 1st St, near Anantham Old Age Home, \nKallikuppam, Ambattur, Chennai, Tamil Nadu 600053",
//         single: false,
//         twin: false,
//         triple: false,
//         four: false,
//         owner_id: "vasumeenu2004@gmail.com",
//         sharing: {
//           onesharing: "9000/-",
//           twosharing: "8000/-",
//           threesharing: "7500/-",
//           foursharing: "6500/-",
//         },
//         image: "https://i.ibb.co/9nFqc67/fecility2.jpg",
//         my_uuid: "f87a4319-82e5-4236-adb2-04876af16453",
//         house_fecilities_image: {
//           image1: "https://i.ibb.co/VYWMD04/entrence1.jpg",
//           image2: "https://i.ibb.co/YNWXBPr/fecilties.jpg",
//           lastimage: "https://i.ibb.co/tQgcQjF/fecility.jpg",
//           image4: "https://iili.io/HhRJTc7.jpg",
//         },
//       },
//       {
//         name: "Vijay Paying Guest",
//         fecilities: {
//           food: "https://iili.io/HXMbdX4.png",
//           parking: "https://iili.io/HXMtHan.png",
//           wifi: "https://iili.io/HXMtAwx.png",
//           tv: "https://iili.io/HXVHLLG.png",
//           fridge: "https://iili.io/HXMDt1I.png",
//         },
//         period: "1 month",
//         available: "Both for girls and boys",
//         beds: "50",
//         amount: "3500/-",
//         time: "11:00pm",
//         address:
//           "2nd St, Parameshwari Nagar, Adyar, Chennai, Tamil Nadu 600020",
//         single: false,
//         twin: false,
//         triple: false,
//         four: false,
//         owner_id: "anna@123gmail.com",
//         sharing: {
//           onesharing: "9000/-",
//           twosharing: "8500/-",
//           threesharing: "7500/-",
//           foursharing: "6500/-",
//         },
//         image: "https://i.ibb.co/kJH4JnQ/beds.jpg",
//         my_uuid: "6a169319-905d-4617-98fb-046597d41b43",
//         house_fecilities_image: {
//           image1: "https://i.ibb.co/QJ7J2T2/home10.jpg",
//           image2: "https://iili.io/HhCkGyP.jpg",
//           lastimage: "https://i.ibb.co/JzJSMK9/balkeni6.jpg",
//           image4: "https://iili.io/HhzX8Ex.jpg",
//         },
//       },
//       {
//         name: "Paying guest Velacherry",
//         fecilities: {
//           food: "https://iili.io/HXMbdX4.png",
//           parking: "https://iili.io/HXMtHan.png",
//           wifi: "https://iili.io/HXMtAwx.png",
//           tv: "https://iili.io/HXVHLLG.png",
//           fridge: "https://iili.io/HXMDt1I.png",
//         },
//         period: "15 days before",
//         available: "Both for girls and boys",
//         beds: "50",
//         amount: "4500/-",
//         time: "11:30pm",
//         address:
//           "2nd Ext St, Venus Colony Extension, VGP Selva Nagar, Velachery, Chennai, Tamil Nadu 600042",
//         single: false,
//         twin: false,
//         triple: false,
//         four: false,
//         owner_id: "saraja@gmail.com",
//         sharing: {
//           onesharing: "8000/-",
//           twosharing: "7500",
//           threesharing: "6000",
//           foursharing: "5000",
//         },
//         image: "https://i.ibb.co/cyxMqQR/smallimg5.jpg",
//         my_uuid: "57d2c93d-4c5f-4c86-8e9e-2a4cc86b77b1",
//         house_fecilities_image: {
//           image1: "https://iili.io/HhApjEP.jpg",
//           image2: "https://iili.io/HhCkGyP.jpg",
//           lastimage: "https://i.ibb.co/HTbfLL6/balkeni8.jpg",
//           image4: "https://iili.io/HhApH7a.jpg",
//         },
//       },
//       {
//         name: "Adyar Paying Guest ",
//         fecilities: {
//           food: "https://iili.io/HXMbdX4.png",
//           parking: "https://iili.io/HXMtHan.png",
//           wifi: "https://iili.io/HXMtAwx.png",
//           tv: "https://iili.io/HXVHLLG.png",
//           fridge: "https://iili.io/HXMDt1I.png",
//         },
//         period: "1 month",
//         available: "Both for girls and boys",
//         beds: "60",
//         amount: "5000/-",
//         time: "11:00pm",
//         address:
//           "25, Adyar Bridge Rd, opp. Malar hospital, Gandhi Nagar, \nAdyar, Chennai, Tamil Nadu 600020",
//         single: true,
//         twin: true,
//         triple: true,
//         four: true,
//         owner_id: "anna@123gmail.com",
//         sharing: {
//           onesharing: "9000/-",
//           twosharing: "8000/-",
//           threesharing: "7500/-",
//           foursharing: "5500/-",
//         },
//         image: "https://i.ibb.co/pZW4f6k/home.jpg",
//         my_uuid: "de9ff776-30a2-47bd-866e-5bb2ab83aa53",
//         house_fecilities_image: {
//           image1: "https://iili.io/HhApjEP.jpg",
//           image2: "https://iili.io/HhRBdpS.jpg",
//           lastimage: "https://i.ibb.co/bmQCwq4/entrence.jpg",
//           image4: "https://iili.io/HhRJTc7.jpg",
//         },
//       },
//       {
//         name: "Sai Deep PG Accommodation ",
//         fecilities: {
//           food: "https://iili.io/HXMbdX4.png",
//           parking: "https://iili.io/HXMtHan.png",
//           wifi: "https://iili.io/HXMtAwx.png",
//           tv: "https://iili.io/HXVHLLG.png",
//           fridge: "https://iili.io/HXMDt1I.png",
//         },
//         period: "1 month",
//         available: "Both  for girls and boys",
//         beds: "60",
//         amount: "3400/-",
//         time: "11:00pm",
//         address:
//           "13, Sai Ayush Pooja Avenue, Opp.RMZ phase 1, \nThiruvalluvar Street, Perungudi, Chennai, Tamil Nadu 600096\n\nContact : 8466009892",
//         single: true,
//         twin: true,
//         triple: true,
//         four: true,
//         owner_id: "manas@gmail.com",
//         sharing: {
//           onesharing: "9000/-",
//           twosharing: "8000/-",
//           threesharing: "7500/-",
//           foursharing: "5500/-",
//         },
//         image: "https://i.ibb.co/ZV5SyTL/image1.jpg",
//         my_uuid: "5510f57b-b2e2-4003-91d4-617cff8dab1d",
//         house_fecilities_image: {
//           image1: "https://iili.io/HhRHSTb.jpg",
//           image2: "https://iili.io/HhRBdpS.jpg",
//           lastimage: "https://i.ibb.co/bmQCwq4/entrence.jpg",
//           image4: "https://iili.io/HhCkGyP.jpg",
//         },
//       },
//       {
//         name: "Sri Lakshmi Prasanna Venkateswara Paying Guest Hostel",
//         fecilities: {
//           food: "https://iili.io/HXMbdX4.png",
//           parking: "https://iili.io/HXMtHan.png",
//           wifi: "https://iili.io/HXMtAwx.png",
//           tv: "https://iili.io/HXVHLLG.png",
//           fridge: "https://iili.io/HXMDt1I.png",
//         },
//         period: "15 days before",
//         available: "Both for girls and boys",
//         beds: "60",
//         amount: "4500/-",
//         time: "11:00pm",
//         address:
//           " No - 30, Kattabomman St, behind CSI Church, Anna Nagar, Tharamani, Chennai, Tamil Nadu 600113",
//         single: true,
//         twin: true,
//         triple: true,
//         four: true,
//         owner_id: "mana@gmail.com",
//         sharing: {
//           onesharing: "9000/-",
//           twosharing: "8000/-",
//           threesharing: "7500/-",
//           foursharing: "5500/-",
//         },
//         image: "https://i.ibb.co/41QQfry/fecility3.jpg",
//         my_uuid: "d0578b7c-e639-4424-b169-56f70ef0ae2f",
//         house_fecilities_image: {
//           image1: "https://iili.io/HhRHSTb.jpg",
//           image2: "https://iili.io/HhRHbwJ.jpg",
//           lastimage: "https://i.ibb.co/JzJSMK9/balkeni6.jpg",
//           image4: "https://iili.io/HhApH7a.jpg",
//         },
//       },
//       {
//         name: "Chennai paying guest",
//         fecilities: {
//           food: "https://iili.io/HXMbdX4.png",
//           parking: "https://iili.io/HXMtHan.png",
//           wifi: "https://iili.io/HXMtAwx.png",
//           tv: "https://iili.io/HXVHLLG.png",
//           fridge: "https://iili.io/HXMDt1I.png",
//         },
//         period: "1 month",
//         available: "Both for girls and boys",
//         beds: "60",
//         amount: "3500/-",
//         time: "11:00pm",
//         address:
//           " 1/470, Corporation Rd, Thorapakkamm, Perungudi, Chennai,\n Tamil Nadu 600096",
//         single: true,
//         twin: true,
//         triple: true,
//         four: true,
//         owner_id: "bavani@gmail.com",
//         sharing: {
//           onesharing: "8000/-",
//           twosharing: "7000",
//           threesharing: "6000",
//           foursharing: "5500/-",
//         },
//         image: "https://i.ibb.co/VMLqfHy/background.jpg",
//         my_uuid: "2fd83d0b-f2e1-416a-8362-958f095da98f",
//         house_fecilities_image: {
//           image1: "https://iili.io/HhRHSTb.jpg",
//           image2: "https://iili.io/HhRHbwJ.jpg",
//           lastimage: "https://iili.io/HhRJqwG.jpg",
//           image4: "https://iili.io/HhzU9f9.jpg",
//         },
//       },
//       {
//         name: "Excellent men's paying guest accommodation",
//         fecilities: {
//           food: "https://iili.io/HXMbdX4.png",
//           parking: "https://iili.io/HXMtHan.png",
//           wifi: "https://iili.io/HXMtAwx.png",
//           tv: "https://iili.io/HXVHLLG.png",
//           fridge: "https://iili.io/HXMDt1I.png",
//         },
//         period: "1 month",
//         available: "Boys",
//         beds: "60",
//         amount: "4000/-",
//         time: "11:00pm",
//         address:
//           " South, Venketeshapuram, Swaminathan Nagar, \nKottivakkam, Chennai, Tamil Nadu 600041",
//         single: true,
//         twin: true,
//         triple: true,
//         four: true,
//         owner_id: "manisha@gmail.com",
//         sharing: {
//           onesharing: "8000/-",
//           twosharing: "8000/-",
//           threesharing: "6000",
//           foursharing: "5500/-",
//         },
//         image: "https://i.ibb.co/c8ksjZK/b2.jpg",
//         my_uuid: "d9ca6517-9b40-4120-b29a-22dc29cf4dda",
//         house_fecilities_image: {
//           image1: "https://iili.io/HhRHSTb.jpg",
//           image2: "https://iili.io/HhzSkAv.jpg",
//           lastimage: "https://i.ibb.co/JzJSMK9/balkeni6.jpg",
//           image4: "https://iili.io/HhApH7a.jpg",
//         },
//       },
//       {
//         name: "Perungudi Ladies pg",
//         fecilities: {
//           food: "https://iili.io/HXMbdX4.png",
//           parking: "https://iili.io/HXMtHan.png",
//           wifi: "https://iili.io/HXMtAwx.png",
//           tv: "https://iili.io/HXVHLLG.png",
//           fridge: "https://iili.io/HXMDt1I.png",
//         },
//         period: "1 month",
//         available: "Girls",
//         beds: "60",
//         amount: "3500/-",
//         time: "11:00pm",
//         address:
//           " 86b, 5th Cross St, Phase-2, Thirumalai Nagar \nAnnexe, Perungudi, Chennai, Tamil Nadu 600096\nContact : 8466009892",
//         owner_id: "uthra@gmail.com",
//         sharing: {
//           onesharing: "8000/-",
//           twosharing: "7000",
//           threesharing: "6000",
//           foursharing: "5000",
//         },
//         image: "https://i.ibb.co/vswz8YD/home3.jpg",
//         my_uuid: "0ce6962c-6b03-468c-a0a2-abf242d5dbf8",
//         house_fecilities_image: {
//           image1: "https://iili.io/HhApjEP.jpg",
//           image2: "https://iili.io/HhRHbwJ.jpg",
//           lastimage: "https://i.ibb.co/JzJSMK9/balkeni6.jpg",
//           image4: "https://iili.io/HhRJTc7.jpg",
//         },
//       },
//       {
//         name: "Anusha Ladies  PG",
//         fecilities: {
//           food: "https://iili.io/HXMbdX4.png",
//           parking: "https://iili.io/HXMtHan.png",
//           wifi: "https://iili.io/HXMtAwx.png",
//           tv: "https://iili.io/HXVHLLG.png",
//           fridge: "https://iili.io/HXMDt1I.png",
//         },
//         period: "1 month",
//         available: "Girls",
//         beds: "60",
//         amount: "2500/-",
//         time: "11:00pm",
//         address:
//           "50, Canalpuram Rd, Bethel Nagar, Perungudi, Chennai, Tamil Nadu 600096\ncontact : 9032739892",
//         owner_id: "uthra@gmail.com",
//         sharing: {
//           onesharing: "9000/-",
//           twosharing: "7000",
//           threesharing: "6500/-",
//           foursharing: "5000",
//         },
//         image: "https://i.ibb.co/x3GqCwR/home11.jpg",
//         my_uuid: "42214ff4-dec8-466e-b96f-52c35d5fe6a7",
//         house_fecilities_image: {
//           image1: "https://iili.io/HhCkGyP.jpg",
//           image2: "https://iili.io/HhzX8Ex.jpg",
//           lastimage: "https://iili.io/HhRJqwG.jpg",
//           image4: "https://iili.io/HhRJTc7.jpg",
//         },
//       },
//       {
//         name: "Sri Gayathri pg",
//         fecilities: {
//           food: "https://iili.io/HXMbdX4.png",
//           parking: "https://iili.io/HXMtHan.png",
//           wifi: "https://iili.io/HXMtAwx.png",
//           tv: "https://iili.io/HXVHLLG.png",
//           fridge: "https://iili.io/HXMDt1I.png",
//         },
//         period: "15 days before",
//         available: "Girls",
//         beds: "50",
//         amount: "2500/-",
//         time: "11:00pm",
//         address:
//           "Sathyamoorthy St, Lakshman Nagar, Perungudi, Chennai, Tamil Nadu 600078\nContact : 9177574675",
//         owner_id: "ayesha@gmail.com",
//         sharing: {
//           onesharing: "9000/-",
//           twosharing: "8000/-",
//           threesharing: "7500/-",
//           foursharing: "5500/-",
//         },
//         image: "https://i.ibb.co/myVyPNL/2.jpg",
//         my_uuid: "2ffd81d8-ce86-444f-9413-74af4539acd4",
//         house_fecilities_image: {
//           image1: "https://iili.io/HhCkGyP.jpg",
//           image2: "https://iili.io/HhRHbwJ.jpg",
//           lastimage: "https://iili.io/HhzUTJa.jpg",
//           image4: "https://iili.io/HhzX8Ex.jpg",
//         },
//       },
//       {
//         name: "Sri Narayanaswamy Ladies pg",
//         fecilities: {
//           food: "https://iili.io/HXMbdX4.png",
//           parking: "https://iili.io/HXMtHan.png",
//           wifi: "https://iili.io/HXMtAwx.png",
//           tv: "https://iili.io/HXVHLLG.png",
//           fridge: "https://iili.io/HXMDt1I.png",
//         },
//         period: "15 days before",
//         available: "Girls",
//         beds: "70",
//         amount: "2500/-",
//         time: "11:30pm",
//         address:
//           "X66R+HHR, Phase-1, Tirumalai Nagar, Perungudi, Chennai, Tamil Nadu 600096\nContact : 9032739892",
//         owner_id: "ayesha@gmail.com",
//         sharing: {
//           onesharing: "8000/-",
//           twosharing: "7000",
//           threesharing: "6000",
//           foursharing: "5500/-",
//         },
//         image: "https://i.ibb.co/TgBZm7x/background.jpg",
//         my_uuid: "39479058-398c-47cc-959f-3314fc022f09",
//         house_fecilities_image: {
//           image1: "https://iili.io/HhRHSTb.jpg",
//           image2: "https://i.ibb.co/f2pDLZ0/entrence.jpg",
//           lastimage: "https://i.ibb.co/p1vwfvH/balkeni7.jpg",
//           image4: "https://iili.io/HhzX8Ex.jpg",
//         },
//       },
//       {
//         name: "Priyanga ladies pg",
//         fecilities: {
//           food: "https://iili.io/HXMbdX4.png",
//           parking: "https://iili.io/HXMtHan.png",
//           wifi: "https://iili.io/HXMtAwx.png",
//           tv: "https://iili.io/HXVHLLG.png",
//           fridge: "https://iili.io/HXMDt1I.png",
//         },
//         period: "1 month",
//         available: "Girls",
//         beds: "60",
//         amount: "3500/-",
//         time: "11:00pm",
//         address:
//           "Ptc, V o c street, Rajiv Gandhi Salai, Chennai, \nTamil Nadu 600097\nPhone: +1 938-445-5219",
//         owner_id: "gouri@gmail.com",
//         sharing: {
//           onesharing: "8000/-",
//           twosharing: "7500",
//           threesharing: "6000",
//           foursharing: "5500/-",
//         },
//         image: "https://i.ibb.co/F8s3BxV/fecility2.jpg",
//         my_uuid: "957b05df-5236-4a56-8db6-2884bcdfaa3c",
//         house_fecilities_image: {
//           image1: "https://iili.io/HhzX8Ex.jpg",
//           image2: "https://iili.io/HhRHbwJ.jpg",
//           lastimage: "https://i.ibb.co/bmQCwq4/entrence.jpg",
//           image4: "https://iili.io/HhzX8Ex.jpg",
//         },
//       },
//       {
//         name: "Srinivasa PG Hostel",
//         fecilities: {
//           food: "https://iili.io/HXMbdX4.png",
//           parking: "https://iili.io/HXMtHan.png",
//           wifi: "https://iili.io/HXMtAwx.png",
//           tv: "https://iili.io/HXVHLLG.png",
//           fridge: "https://iili.io/HXMDt1I.png",
//         },
//         period: "15 days before",
//         available: "Girls",
//         beds: "60",
//         amount: "2000/-",
//         time: "11:30pm",
//         address:
//           "58, 2nd Street, Thiruvengadam Nagar, Kandhanchavadi, Chennai, Tamil Nadu 600096\nPhone: 098840 44097",
//         owner_id: "jayasree@gmail.com",
//         sharing: {
//           onesharing: "9000/-",
//           twosharing: "7500/-",
//           threesharing: "6000/-",
//           foursharing: "5000",
//         },
//         image: "https://i.ibb.co/2WDXntT/fecility.jpg",
//         my_uuid: "b2da88b4-213b-458b-b4ac-520d669922a4",
//         house_fecilities_image: {
//           image1: "https://iili.io/HhCkGyP.jpg",
//           image2: "https://iili.io/HhCkGyP.jpg",
//           lastimage: "https://i.ibb.co/HTbfLL6/balkeni8.jpg",
//           image4: "https://iili.io/HhzX8Ex.jpg",
//         },
//       },
//       {
//         name: "Sri Lakshmi Narayana Gents pg",
//         fecilities: {
//           food: "https://iili.io/HXMbdX4.png",
//           parking: "https://iili.io/HXMtHan.png",
//           wifi: "https://iili.io/HXMtAwx.png",
//           tv: "https://iili.io/HXVHLLG.png",
//           fridge: "https://iili.io/HXMDt1I.png",
//         },
//         period: "15 days before",
//         available: "Boys",
//         beds: "60",
//         amount: "3500/-",
//         time: "11:00pm",
//         address:
//           "07, Thiruvalluvar Salai, near Taramani IIT Gate Road,\n Anna Nagar, Tharamani, Chennai, Tamil Nadu 600113\nHours: Open 24 hours , Phone: 094442 29358",
//         owner_id: "jayasree@gmail.com",
//         sharing: {
//           onesharing: "8000",
//           twosharing: "7000",
//           threesharing: "6000",
//           foursharing: "5000",
//         },
//         image: "https://i.ibb.co/dfwhYZf/home1.jpg",
//         my_uuid: "fe913f84-e7b0-4cf0-9a02-84f29fd0b148",
//         house_fecilities_image: {
//           image1: "https://iili.io/HhApjEP.jpg",
//           image2: "https://iili.io/HhRHbwJ.jpg",
//           lastimage: "https://i.ibb.co/JzJSMK9/balkeni6.jpg",
//           image4: "https://iili.io/HhRJTc7.jpg",
//         },
//       },
//     ])
//   );
// }

const pgs =  [
  {
  my_uuid: "49da39ad-8ac4-4314-abad-67d6ca67253a", 
  "pg_details": { "name": "Zolo titanium PG", "period": "1 Month", "available": "Boys", "beds": "100", "advance": "10000", "time": "12:00 PM", "address": "90-166, 5th Main Rd, LIC Nagar, Alaiamman Nagar, Madipakkam, Chennai, Tamil Nadu 600117", "owner_id": "utra@gmail.com", "image": "https://i.ibb.co/YLZyJxv/houseimage3.jpg", "phone_number": "8466009892" }, 
  "share_data": [
    { "image": "https://i.ibb.co/c8LVmLH/oneshare1.jpg", "name": "Single Sharing With AC", "rent": "15000" },
     { "image": "https://i.ibb.co/BP4Rd46/twoshare5.jpg", "name": "Twin Sharing With AC", "rent": "13000" }, 
     { "image": "https://i.ibb.co/8BBfqC4/threeshare2.jpg", "name": "Three sharing with AC", "rent": "12000" }, 
     { "image": "https://i.ibb.co/pKP1DZT/fourshare1.jpg", "name": "Four Sharing Non AC", "rent": "10000" },
     { "image": "https://i.ibb.co/56rft1M/six-sharing-bed.jpg", "name": "Six Sharing Non AC", "rent": "8000" }, 
     { "image": "https://i.ibb.co/mCZXHTy/five-share.jpg", "name": "Five Sharing NON AC", "rent": "7500" }
    ], 
     "facilities_data": [
      { "image": "https://i.ibb.co/3kW5bn5/food1-removebg-preview.png", "name": "Food" },
       { "image": "https://i.ibb.co/SV6W10C/washing.png", "name": "WashingMachine" }, 
       { "image": "https://i.ibb.co/Hdrw0pL/fridge-removebg-preview.png", "name": "Fridge" }, 
       { "image": "https://i.ibb.co/K5Hqcfp/wifi.png", "name": "Wifi" }, 
       { "image": "https://i.ibb.co/DLkGSHX/TV-removebg-preview.png", "name": "TV" }, 
       { "image": "https://i.ibb.co/pQ44nmL/parking-removebg-preview.png", "name": "Parking" }
      ]
}, 
{
  "my_uuid": "e7c2b1c4-621b-4cd1-b4f5-a5d531567827", "pg_details":
    { "name": "Thaai Women Hostel and PG", "period": "1 Month Before", "available": "Girls", "beds": "90", "advance": "10000", "time": "12:00 PM", "address": "No 8, 2nd Cross St, near PowerHouse-Bus-stop, Ganga Nagar, Kodambakkam, Chennai, Tamil Nadu 600024", "owner_id": "utra@gmail.com", "image": "https://i.ibb.co/72yHqZQ/houseimage18.jpg", "phone_number": "7904911208" }, "share_data": [{ "image": "https://i.ibb.co/Bnknfvw/pg-fecilties.jpg", "name": "Single Sharing With AC", "rent": "14000" }, { "image": "https://i.ibb.co/JkzWQqN/twoshare8.jpg", "name": "Twin Sharing With AC", "rent": "12000" }, { "image": "https://i.ibb.co/hCDwLPn/threeshare7.jpg", "name": "Three Sharing With AC", "rent": "11000" }, { "image": "https://i.ibb.co/hKzYW1K/threeshare10.webp", "name": "Three Sharing Non AC", "rent": "10000" }, { "image": "https://i.ibb.co/2y5ZSKX/fourshare6.jpg", "name": "Four Sharing Non AC", "rent": "8000" }, { "image": "https://i.ibb.co/nQCgV4s/five-share.jpg", "name": "Five Sharing With  AC", "rent": "9000" }], "facilities_data": [{ "image": "https://i.ibb.co/Hdrw0pL/fridge-removebg-preview.png", "name": "Fridge" }, { "image": "https://i.ibb.co/K5Hqcfp/wifi.png", "name": "Wifi" }, { "image": "https://i.ibb.co/pQ44nmL/parking-removebg-preview.png", "name": "Parking" }, { "image": "https://i.ibb.co/DLkGSHX/TV-removebg-preview.png", "name": "TV" }, { "image": "https://i.ibb.co/kynVgky/cooking-removebg-preview-1.png", "name": "SelfCook" }]
}, 
{
  "my_uuid": "eced00d2-941e-4c75-9a36-8d0a01bcbcce",
  "pg_details":
    { "name": "Loyola Paying Guest", "period": "15 days before", "available": "Both for girls and boys", "beds": "110", "advance": "9000", "time": "11:00 PM", "address": "45/25, Lourd Doss Grotto Rd, Arokya Matha Nagar, Little Mount, Saidapet, Chennai, Tamil Nadu 600025", "owner_id": "utra@gmail.com", "image": "https://i.ibb.co/XYn40rD/houseimage1.webp", "phone_number": "7418679291" }, "share_data": [{ "image": "https://i.ibb.co/ncyPKgr/image-detail.jpg", "name": "Single Sharing With AC", "rent": "16000" }, { "image": "https://i.ibb.co/BP4Rd46/twoshare5.jpg", "name": "Twin Sharing With AC", "rent": "14000" }, { "image": "https://i.ibb.co/WnvjP2M/beds.jpg", "name": "Twin Sharing Non AC", "rent": "10000" }, { "image": "https://i.ibb.co/PmQ7j0P/threeshare6.jpg", "name": "Three Sharing With AC", "rent": "12000" }, { "image": "https://i.ibb.co/vw16g77/fourshare5.jpg", "name": "Four Sharing Non AC", "rent": "11000" }, { "image": "https://i.ibb.co/TMmWmQX/sixshare1.jpg", "name": "Six Sharing Non AC", "rent": "8500" }], "facilities_data": [{ "image": "https://i.ibb.co/DLkGSHX/TV-removebg-preview.png", "name": "TV" }, { "image": "https://i.ibb.co/Hdrw0pL/fridge-removebg-preview.png", "name": "Fridge" }, { "image": "https://i.ibb.co/pQ44nmL/parking-removebg-preview.png", "name": "Parking" }, { "image": "https://i.ibb.co/K5Hqcfp/wifi.png", "name": "Wifi" }, { "image": "https://i.ibb.co/SV6W10C/washing.png", "name": "WashingMAchine" }]
},
{
  "my_uuid": "ad940f61-0ea6-4fe1-92d1-a100d9cbf492", "pg_details":
    { "name": "Men Paying Guestl", "period": "15 days before", "available": "Boys", "beds": "70", "advance": "8000", "time": "11:00 PM", "address": "1/28, Main Rd, South Phase, Achugam Nagar, Gandhi Nagar, Chennai, Tamil Nadu 600032", "owner_id": "saranya@gmail.com", "image": "https://i.ibb.co/TMGcmqr/houseimage15.jpg", "phone_number": "7904911208" }, "share_data": [{ "image": "https://i.ibb.co/zh6pBfc/images.jpg", "name": "Single Sharing With AC", "rent": "15000" }, { "image": "https://i.ibb.co/BP4Rd46/twoshare5.jpg", "name": "Twin Sharing With AC", "rent": "13000" }, { "image": "https://i.ibb.co/jV59jQb/smallimg2.jpg", "name": "Twin Sharing Non AC", "rent": "10000" }, { "image": "https://i.ibb.co/51m7fLN/fourshare7.jpg", "name": "Four Sharing Non AC", "rent": "8500" }, { "image": "https://i.ibb.co/mCZXHTy/five-share.jpg", "name": "Five Sharing Non AC", "rent": "7500" }], "facilities_data": [{ "image": "https://i.ibb.co/Hdrw0pL/fridge-removebg-preview.png", "name": "Fridge" }, { "image": "https://i.ibb.co/SV6W10C/washing.png", "name": "Washingmachine" }, { "image": "https://i.ibb.co/K5Hqcfp/wifi.png", "name": "Wifi" }, { "image": "https://i.ibb.co/DLkGSHX/TV-removebg-preview.png", "name": "TV" }, { "image": "https://i.ibb.co/pQ44nmL/parking-removebg-preview.png", "name": "Parking" }]
}, 
{
  "my_uuid": "41a22a9f-fb92-477f-b417-7d9ff86dabba", "pg_details":
    { "name": "Zolo imperial PG", "period": "15 days before", "available": "Girls", "beds": "150", "advance": "10000", "time": "11:00 PM", "address": "35M7+PMX, Unnamed Road, Reddipalaiyam, Mogappair, Chennai, Tamil Nadu 600037", "owner_id": "saranya@gmail.com", "image": "https://i.ibb.co/DwHcnmy/houseimage14.webp", "phone_number": "9987654323" }, "share_data": [{ "image": "https://i.ibb.co/sv8bVk1/fecility2.jpg", "name": "Single Sharing With AC", "rent": "16000" }, { "image": "https://i.ibb.co/JkzWQqN/twoshare8.jpg", "name": "Twin Sharing With AC", "rent": "14000" }, { "image": "https://i.ibb.co/8KjYPH9/twoshare1.jpg", "name": "Twin Sharing Non AC", "rent": "10000" }, { "image": "https://i.ibb.co/GdpVp25/fourshare2.jpg", "name": "Four Sharing With AC", "rent": "12000" }, { "image": "https://i.ibb.co/BBjtWsx/five-share-bed.jpg", "name": "Four Sharing with AC Sharing Non AC", "rent": "9000" }, { "image": "https://i.ibb.co/TMmWmQX/sixshare1.jpg", "name": "Six Sharing Non AC", "rent": "7500" }], "facilities_data": [{ "image": "https://i.ibb.co/DLkGSHX/TV-removebg-preview.png", "name": "TV" }, { "image": "https://i.ibb.co/Hdrw0pL/fridge-removebg-preview.png", "name": "Fridge" }, { "image": "https://i.ibb.co/SV6W10C/washing.png", "name": "Washingmachine" }, { "image": "https://i.ibb.co/K5Hqcfp/wifi.png", "name": "Wifi" }, { "image": "https://i.ibb.co/3kW5bn5/food1-removebg-preview.png", "name": "Food" }]
}, 
{
  "my_uuid": "0ec5b49a-277f-4be0-8f4d-bf1f31946d1a", "pg_details":
    { "name": "Sri Gowri", "period": "15 days before", "available": "Both for girls and boys", "beds": "100", "advance": "10000", "time": "11:00 PM", "address": "2683+97W, Poomagal Main Rd, Poomagal Nagar, Gandhi Nagar, Chennai, Tamil Nadu 600032", "owner_id": "saranya@gmail.com", "image": "https://i.ibb.co/ZhhWRHL/houseimage12.jpg", "phone_number": "9987654433" }, "share_data": [{ "image": "https://i.ibb.co/vQWSXSB/oneshare5.webp", "name": "Single Sharing With AC", "rent": "14000" }, { "image": "https://i.ibb.co/zhXq5ZC/twoshare3.jpg", "name": "Twin Sharing With AC", "rent": "13000" }, { "image": "https://i.ibb.co/Wck1jD2/twoshare2.jpg", "name": "Twin Sharing Non AC", "rent": "10000" }, { "image": "https://i.ibb.co/Cvcr3gn/threeshare4.jpg", "name": "Three Sharing Non AC", "rent": "9000" }, { "image": "https://i.ibb.co/kgWhHHT/fourshare.jpg", "name": "Four Sharing With AC", "rent": "8500" }, { "image": "https://i.ibb.co/nQCgV4s/five-share.jpg", "name": "Five Sharing  Non AC", "rent": "8000" }], "facilities_data": [{ "image": "https://i.ibb.co/Hdrw0pL/fridge-removebg-preview.png", "name": "Fridge" }, { "image": "https://i.ibb.co/SV6W10C/washing.png", "name": "WashingMachine" }, { "image": "https://i.ibb.co/K5Hqcfp/wifi.png", "name": "Wifi" }, { "image": "https://i.ibb.co/DLkGSHX/TV-removebg-preview.png", "name": "TV" }, { "image": "https://i.ibb.co/pQ44nmL/parking-removebg-preview.png", "name": "Parking" }, { "image": "https://i.ibb.co/kynVgky/cooking-removebg-preview-1.png", "name": "SelfCook" }]
}, 
{
  "my_uuid": "0238d5b4-1f13-4eae-8972-9928eaa58984", "pg_details":
    { "name": "Shree Jayam Ladies pg", "period": "15 days before", "available": "Girls", "beds": "100", "advance": "10000", "time": "11:00 PM", "address": "X68W+C3G, CBI Colony Main Rd, CBI Colony, Govindasamy Nagar, Perungudi, Chennai, Tamil Nadu 600096", "owner_id": "bakyalakshmi@gmail.com", "image": "https://i.ibb.co/6ZKrtmc/houseimage10.webp", "phone_number": "9234567889" }, "share_data": [{ "image": "https://i.ibb.co/Y2pjDYM/fecility1.jpg", "name": "Single Sharing With AC", "rent": "16000" }, { "image": "https://i.ibb.co/L830h2x/twoshare7.jpg", "name": "Twin Sharing With AC", "rent": "14000" }, { "image": "https://i.ibb.co/jykz5nc/smallimg.jpg", "name": "Twin Sharing Non AC", "rent": "12000" }, { "image": "https://i.ibb.co/8dz3P3c/image1.jpg", "name": "Three Sharing Non AC", "rent": "11000" }, { "image": "https://i.ibb.co/mRZ6vkh/image2.jpg", "name": "Four Sharing Non AC", "rent": "10000" }], "facilities_data": [{ "image": "https://i.ibb.co/Hdrw0pL/fridge-removebg-preview.png", "name": "Fridge" }, { "image": "https://i.ibb.co/K5Hqcfp/wifi.png", "name": "Wifi" }, { "image": "https://i.ibb.co/DLkGSHX/TV-removebg-preview.png", "name": "TV" }, { "image": "https://i.ibb.co/pQ44nmL/parking-removebg-preview.png", "name": "Parking" }, { "image": "https://i.ibb.co/SV6W10C/washing.png", "name": "Washingmachine" }, { "image": "https://i.ibb.co/3kW5bn5/food1-removebg-preview.png", "name": "Food" }]
}, 
{
  "my_uuid": "a221aab9-7607-44f2-ac19-e9f658e7127b", "pg_details":
    { "name": "Aanjanay pg for men", "period": "15 days before", "available": "Boys", "beds": "90", "advance": "10000", "time": "11:00 PM", "address": "14, Guindy Engineers Colony, Main Road,, Okkiam Thoraipakkam, OMR., Chennai, Tamil Nadu 600097", "owner_id": "bakyalakshmi@gmail.com", "image": "https://i.ibb.co/dtx4kZG/houseimage8.jpg", "phone_number": "9998763452" }, "share_data": [{ "image": "https://i.ibb.co/d0NkNjS/oneshare1.jpg", "name": "Single Sharing With AC", "rent": "14000" }, { "image": "https://i.ibb.co/JkzWQqN/twoshare8.jpg", "name": "Twin Sharing With AC", "rent": "13000" }, { "image": "https://i.ibb.co/hCDwLPn/threeshare7.jpg", "name": "Three Sharing Non AC", "rent": "10000" }, { "image": "https://i.ibb.co/4prnrD6/b2.jpg", "name": "Four Sharing Non AC", "rent": "8500" }, { "image": "https://i.ibb.co/nQCgV4s/five-share.jpg", "name": "Five Sharing Non AC", "rent": "8000" }], "facilities_data": [{ "image": "https://i.ibb.co/Hdrw0pL/fridge-removebg-preview.png", "name": "Fridge" }, { "image": "https://i.ibb.co/K5Hqcfp/wifi.png", "name": "Wifi" }, { "image": "https://i.ibb.co/DLkGSHX/TV-removebg-preview.png", "name": "TV" }, { "image": "https://i.ibb.co/pQ44nmL/parking-removebg-preview.png", "name": "Parking" }, { "image": "https://i.ibb.co/kynVgky/cooking-removebg-preview-1.png", "name": "SelfCook" }]
}, 
{
  "my_uuid": "0ccb9562-80eb-4b96-ab9c-b643f2bf2e0b", "pg_details":
    { "name": "LotusPark  Paying Guest", "period": "1 Month", "available": "Both for girls and boys", "beds": "100", "advance": "10000", "time": "12:00 PM", "address": "3, Mallika Towers, Sivaji St, T Nagar, T. Nagar, Chennai, Tamil Nadu 600017", "owner_id": "bakyalakshmi@gmail.com", "image": "https://i.ibb.co/PrrRV1v/houseimage7.webp", "phone_number": "9923456787" }, "share_data": [{ "image": "https://i.ibb.co/zh6pBfc/images.jpg", "name": "Single Sharing With AC", "rent": "15000" }, { "image": "https://i.ibb.co/F7cxwBH/twoshare4.jpg", "name": "Twin Sharing With AC", "rent": "13000" }, { "image": "https://i.ibb.co/8KjYPH9/twoshare1.jpg", "name": "Two Sharing Non AC", "rent": "11000" }, { "image": "https://i.ibb.co/hKzYW1K/threeshare10.webp", "name": "Three Sharing Non AC", "rent": "12000" }, { "image": "https://i.ibb.co/51m7fLN/fourshare7.jpg", "name": "Four Sharing Non AC", "rent": "10000" }, { "image": "https://i.ibb.co/p3D5GBS/six-share2.jpg", "name": "Six Sharing Non AC", "rent": "9000" }], "facilities_data": [{ "image": "https://i.ibb.co/pQ44nmL/parking-removebg-preview.png", "name": "Parking" }, { "image": "https://i.ibb.co/SV6W10C/washing.png", "name": "Washingmachine" }, { "image": "https://i.ibb.co/Hdrw0pL/fridge-removebg-preview.png", "name": "Fridge" }, { "image": "https://i.ibb.co/K5Hqcfp/wifi.png", "name": "Wifi" }, { "image": "https://i.ibb.co/3kW5bn5/food1-removebg-preview.png", "name": "Food" }]
}, 
{
  "my_uuid": "8da0b555-e718-4e4b-8e6d-8c573e9a7e38", "pg_details":
    { "name": "PG space for men", "period": "15 days before", "available": "Both for girls and boys", "beds": "100", "advance": "10000", "time": "11:00 PM", "address": "78, 3rd Cross St, near Dr.MGR University, Varalakshmi Nagar, Sentamil Nagar, Maduravoyal, Chennai, Tamil Nadu 600097", "owner_id": "santhosh@gmail.com", "image": "https://i.ibb.co/LtR4zwB/houseimage5.jpg", "phone_number": "9876543399" }, "share_data": [{ "image": "https://i.ibb.co/zh6pBfc/images.jpg", "name": "Single Sharing With AC", "rent": "15000" }, { "image": "https://i.ibb.co/BP4Rd46/twoshare5.jpg", "name": "Twin Sharing With AC", "rent": "13000" }, { "image": "https://i.ibb.co/WnvjP2M/beds.jpg", "name": "Twin Sharing Non AC", "rent": "10000" }, { "image": "https://i.ibb.co/68Jr29P/fecility3.jpg", "name": "Three Sharing Non AC", "rent": "8000" }, { "image": "https://i.ibb.co/BBjtWsx/five-share-bed.jpg", "name": "Four Sharing Non AC", "rent": "8500" }, { "image": "https://i.ibb.co/nQCgV4s/five-share.jpg", "name": "Five Sharing With AC", "rent": "9000" }], "facilities_data": [{ "image": "https://i.ibb.co/SV6W10C/washing.png", "name": "Washingmachine" }, { "image": "https://i.ibb.co/K5Hqcfp/wifi.png", "name": "Wifi" }, { "image": "https://i.ibb.co/Hdrw0pL/fridge-removebg-preview.png", "name": "Fridge" }, { "image": "https://i.ibb.co/DLkGSHX/TV-removebg-preview.png", "name": "TV" }, { "image": "https://i.ibb.co/3kW5bn5/food1-removebg-preview.png", "name": "Food" }]
}, 
{
  "my_uuid": "185ffe77-e0dd-43f2-bcf2-f68075001c00", "pg_details":
    { "name": "Mithra Ladies pg", "period": "1 Month", "available": "Boys", "beds": "100", "advance": "10000", "time": "12:00 PM", "address": "10, Chakrapani Street Extn., Chennai, Tamil Nadu 600032", "owner_id": "santhosh@gmail.com", "image": "https://i.ibb.co/FxcX7L9/houseimage1.webp", "phone_number": "9032345667" }, "share_data": [{ "image": "https://i.ibb.co/vQWSXSB/oneshare5.webp", "name": "Single Sharing With AC", "rent": "15000" }, { "image": "https://i.ibb.co/98V3CVF/pg-bangloore.jpg", "name": "Twin Sharing with AC", "rent": "13000" }, { "image": "https://i.ibb.co/bsGbHb5/image.jpg", "name": "Twin Sharing Non AC", "rent": "11000" }, { "image": "https://i.ibb.co/fYvz0Pm/threeshare.jpg", "name": "Three Sharing with AC", "rent": "12000" }, { "image": "https://i.ibb.co/vw16g77/fourshare5.jpg", "name": "Four Sharing Non AC", "rent": "10000" }], "facilities_data": [{ "image": "https://i.ibb.co/DLkGSHX/TV-removebg-preview.png", "name": "TV" }, { "image": "https://i.ibb.co/Hdrw0pL/fridge-removebg-preview.png", "name": "Fridge" }, { "image": "https://i.ibb.co/pQ44nmL/parking-removebg-preview.png", "name": "Parking" }, { "image": "https://i.ibb.co/K5Hqcfp/wifi.png", "name": "Wifi" }]
}, 
{
  "my_uuid": "75b2520d-111e-427d-b90d-ada1bdbdc529", "pg_details":
    { "name": "Sri Gowri Pg", "period": "1 Month", "available": "Girls", "beds": "100", "advance": "10000", "time": "12:00 PM", "address": "2683+97W, Poomagal Main Rd, Poomagal Nagar, Gandhi Nagar, Chennai, Tamil Nadu 600032", "owner_id": "santhosh@gmail.com", "image": "https://i.ibb.co/wRWYmwM/houseimage.webp", "phone_number": "9888765654" }, "share_data": [{ "image": "https://i.ibb.co/sv8bVk1/fecility2.jpg", "name": "Single Sharing With AC", "rent": "14000" }, { "image": "https://i.ibb.co/JkzWQqN/twoshare8.jpg", "name": "Twin Sharing With AC", "rent": "13000" }, { "image": "https://i.ibb.co/WnvjP2M/beds.jpg", "name": "Twin Sharing Non AC", "rent": "10000" }, { "image": "https://i.ibb.co/BHhLnDn/threeshare1.jpg", "name": "Three Sharing With AC", "rent": "12000" }, { "image": "https://i.ibb.co/hKzYW1K/threeshare10.webp", "name": "Three Sharing Non AC", "rent": "9000" }, { "image": "https://i.ibb.co/BBjtWsx/five-share-bed.jpg", "name": "Four Sharing Non Ac", "rent": "8000" }], "facilities_data": [{ "image": "https://i.ibb.co/Hdrw0pL/fridge-removebg-preview.png", "name": "Fridge" }, { "image": "https://i.ibb.co/K5Hqcfp/wifi.png", "name": "Wifi" }, { "image": "https://i.ibb.co/SV6W10C/washing.png", "name": "Washing" }, { "image": "https://i.ibb.co/pQ44nmL/parking-removebg-preview.png", "name": "Parking" }]
}
];

const products =JSON.parse(localStorage.getItem("pgdetails"));
if (!products) {
  localStorage.setItem("pgdetails",JSON.stringify(pgs));

}

