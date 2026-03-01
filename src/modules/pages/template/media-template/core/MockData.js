const dataExport = {
  mockData: [
    {
      id: 1,
      image: "https://images.wsj.net/im-987430/?width=2000&size=1.9493177387914",
      title: "Why Californians Have Some of the Highest Power Bills in the U.S",
      author: "Jane Doe",
      cate: "Life",
      desc: "BORREGO SPRINGS, Calif.—California is doing all it can to expand renewable energy production and rebuild its electrical infrastructure after flaws led to a series of devastating wildfires. The state’s big utilities are spending billions to bury power lines and insulate wires, while at the same time moving quickly away from fossil fuels by building big solar and wind farms and transmission lines to carry the power.",
      days: 10,
      date: new Date().getDate(),
      pf: "https://i.pinimg.com/enabled/564x/51/04/0b/51040b07ce936cc6d9d9a1563fc67315.jpg",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "Local Community Rallies Against New Development Plans",
      author: "Jane Doe",
      cate: "Sport",
      desc: "Omniscient Reader's Viewpoint (also called Omniscient Reader and often abbreviated to ORV) is an apocalyptic fantasy fiction webnovel, written by a Korean author duo writing under the pen name Sing Shong. It was originally written in Korean",
      days: 10,
      date: new Date().getDate(),
      pf: "https://i.pinimg.com/enabled/564x/51/04/0b/51040b07ce936cc6d9d9a1563fc67315.jpg",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "Tech Giant Announces Major Updates to Its Flagship Product",
      author: "John Smith",
      cate: "Technology",
      desc: "Omniscient Reader's Viewpoint (also called Omniscient Reader and often abbreviated to ORV) is an apocalyptic fantasy fiction webnovel, written by a Korean author duo writing under the pen name Sing Shong. It was originally written in Korean",
      days: 5,
      date: new Date().getDate(),
      pf: "https://i.pinimg.com/enabled/564x/51/04/0b/51040b07ce936cc6d9d9a1563fc67315.jpg",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "Environmental Activists Protest Outside Government Building",
      author: "Emily Johnson",
      cate: "Technology",
      desc: "Omniscient Reader's Viewpoint (also called Omniscient Reader and often abbreviated to ORV) is an apocalyptic fantasy fiction webnovel, written by a Korean author duo writing under the pen name Sing Shong. It was originally written in Korean",
      days: 15,
      date: new Date().getDate(),
      pf: "https://i.pinimg.com/enabled/564x/51/04/0b/51040b07ce936cc6d9d9a1563fc67315.jpg",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "Scientist Discovers Revolutionary Approach to Renewable Energy",
      author: "Economic",
      cate: "Economic",
      desc: "Omniscient Reader's Viewpoint (also called Omniscient Reader and often abbreviated to ORV) is an apocalyptic fantasy fiction webnovel, written by a Korean author duo writing under the pen name Sing Shong. It was originally written in Korean",
      days: 20,
      date: new Date().getDate(),
      pf: "https://i.pinimg.com/enabled/564x/51/04/0b/51040b07ce936cc6d9d9a1563fc67315.jpg",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "Healthcare Providers Warn About Rising Cases of Preventable Diseases",
      author: "Nurse Sarah Connor",
      cate: "Life",
      desc: "Omniscient Reader's Viewpoint (also called Omniscient Reader and often abbreviated to ORV) is an apocalyptic fantasy fiction webnovel, written by a Korean author duo writing under the pen name Sing Shong. It was originally written in Korean",
      days: 25,
      date: new Date().getDate(),
      pf: "https://i.pinimg.com/enabled/564x/51/04/0b/51040b07ce936cc6d9d9a1563fc67315.jpg",
    },
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "Tech Giant Announces Major Updates to Its Flagship Product",
      author: "John Smith",
      cate: "Technology",
      desc: "Omniscient Reader's Viewpoint (also called Omniscient Reader and often abbreviated to ORV) is an apocalyptic fantasy fiction webnovel, written by a Korean author duo writing under the pen name Sing Shong. It was originally written in Korean",
      days: 5,
      date: new Date().getDate(),
      pf: "https://i.pinimg.com/enabled/564x/51/04/0b/51040b07ce936cc6d9d9a1563fc67315.jpg",
    },
    {
      id: 8,
      image:
        "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "Environmental Activists Protest Outside Government Building",
      author: "Emily Johnson",
      cate: "Social",
      desc: "Omniscient Reader's Viewpoint (also called Omniscient Reader and often abbreviated to ORV) is an apocalyptic fantasy fiction webnovel, written by a Korean author duo writing under the pen name Sing Shong. It was originally written in Korean",
      days: 15,
      date: new Date().getDate(),
      pf: "https://i.pinimg.com/enabled/564x/51/04/0b/51040b07ce936cc6d9d9a1563fc67315.jpg",
    },
    {
      id: 9,
      image:
        "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "Scientist Discovers Revolutionary Approach to Renewable Energy",
      author: "Dr. Richard Roe",
      cate: "Technology",
      desc: "Omniscient Reader's Viewpoint (also called Omniscient Reader and often abbreviated to ORV) is an apocalyptic fantasy fiction webnovel, written by a Korean author duo writing under the pen name Sing Shong. It was originally written in Korean",
      days: 20,
      date: new Date().getDate(),
      pf: "https://i.pinimg.com/enabled/564x/51/04/0b/51040b07ce936cc6d9d9a1563fc67315.jpg",
    },
    {
      id: 10,
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "Healthcare Providers Warn About Rising Cases of Preventable Diseases",
      author: "Nurse Sarah Connor",
      cate: "Entertainment",
      desc: "Omniscient Reader's Viewpoint (also called Omniscient Reader and often abbreviated to ORV) is an apocalyptic fantasy fiction webnovel, written by a Korean author duo writing under the pen name Sing Shong. It was originally written in Korean",
      days: 25,
      date: new Date().getDate(),
      pf: "https://i.pinimg.com/enabled/564x/51/04/0b/51040b07ce936cc6d9d9a1563fc67315.jpg",
    },
  ],
  adData: [
    {
      bgImg:
        "https://img.freepik.com/free-vector/mega-sale-banner_23-2147987223.jpg?t=st=1720197980~exp=1720201580~hmac=a54e7aa5dbf9e362b05ba8d7426333862ca725ac745829b6a2a70e1a10edc922&w=1480",
      context: "Discover the latest fashion trends",
      link: "https://example.com/fashion",
      linkContext: "Shop now",
    },
    {
      bgImg:
        "https://img.freepik.com/free-vector/flat-cyber-monday-online-shopping_23-2148318173.jpg?t=st=1720198031~exp=1720201631~hmac=07fa77fb9426c5a5ec12a4edd353b45d7047b28e26389d965d5b833e572fa0db&w=1480",
      context: "Plan your dream vacation with our travel deals",
      link: "https://example.com/travel",
      linkContext: "Book your trip",
    },
    {
      bgImg:
        "https://img.freepik.com/free-psd/international-nurses-day-leaderboard-banner_23-2151361535.jpg?t=st=1720198103~exp=1720201703~hmac=064033516bc01653578e7f0c83049b23d8a7b36bc1867af87bfa461782b1c3ad&w=2000",
      context: "Upgrade your home with our furniture collection",
      link: "https://example.com/furniture",
      linkContext: "Browse products",
    },
    {
      bgImg:
        "https://img.freepik.com/free-psd/conference-template-design_23-2151576062.jpg?t=st=1720198228~exp=1720201828~hmac=0a11cae00c4b6c173210ed8ab1972f9df46ae397a91c5a7ff036514eb4f61170&w=2000",
      context: "Upgrade your home with our furniture collection",
      link: "https://example.com/furniture",
      linkContext: "Browse products",
    },
  ],
  navbar: {
    logo: "https://www.khmertimeskh.com/wp-content/uploads/2021/05/KHMER-TIMES.jpg",
    link: "https://www.khmertimeskh.com/category/khmer/",
    cate: [
      { name: "Home", khName: "ទំព័រដើម" },
      { name: "Technology", khName: "បច្ចេកវិទ្យា" },
      { name: "Sport", khName: "កីឡា" },
      { name: "Economic", khName: "សេដ្ឋកិច្ច" },
      { name: "Entertainment", khName: "កំសាន្ត" },
    ],
  },
};

export default dataExport;
