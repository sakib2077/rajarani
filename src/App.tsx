import React, { useState } from 'react';
import { MapPin, Camera, History, Archive as Architecture, Compass, Columns, ChevronDown, Ruler, Palette, Leaf, Calendar, BookOpen } from 'lucide-react';

type Language = 'en' | 'hi' | 'or';

interface ContentData {
  title: string;
  subtitle: string;
  location: string;
  historicalOverview: {
    title: string;
    content: string[];
  };
  architecturalComposition: {
    title: string;
    primaryStructure: {
      title: string;
      items: string[];
    };
    panchangaBada: {
      title: string;
      items: string[];
    };
  };
  sculpturalHeritage: {
    title: string;
    content: string[];
    items: string[];
  };
  nayikas: {
    title: string;
    content: string[];
    activities: {
      title: string;
      items: string[];
    };
    interactions: {
      title: string;
      items: string[];
    };
    expressions: {
      title: string;
      items: string[];
    };
  };
  decorativeArt: {
    title: string;
    content: string[];
  };
  historicalDating: {
    title: string;
    content: string;
  };
  gardenComplex: {
    title: string;
    content: string;
  };
  video: {
    frame: string;
  }
}

const content: Record<Language, ContentData> = {
  en: {
    title: "Rajarani Temple",
    subtitle: "A Masterpiece of Odishan Architecture",
    location: "20°15'N, 85°50'E • Bhubaneswar, Odisha",
    historicalOverview: {
      title: "Historical Overview",
      content: [
        "The Rajarani temple, originally known as the Indresvara Siva Temple, stands as a testament to the architectural brilliance of ancient Odisha. Located in the north-east of Lingaraja Temple, this remarkable structure represents a unique experiment in temple architecture, distinguished by its sculptural excellence and ornate design.",
        "The temple derives its current name 'Rajarani' from the fine-grained yellowish sandstone used in its construction. This special stone, known locally as Rajarania, gives the temple its distinctive amber hue that has mellowed beautifully with time, enhancing its architectural splendor."
      ]
    },
    architecturalComposition: {
      title: "Architectural Composition",
      primaryStructure: {
        title: "Primary Structure",
        items: [
          "Eastern Orientation",
          "Sanctum (Deul) Height: 17.9 meters", 
          "Pancharatha Plan with Curvilinear Superstructure",
          "Three-Moulded Platform Base"
        ]
      },
      panchangaBada: {
        title: "Panchanga Bada (Five Divisions)",
        items: [
          "1. Pabhaga (Base)",
          "2. Talajangha (Lower Wall)", 
          "3. Bandhana (Binding)",
          "4. Uparajangha (Upper Wall)",
          "5. Baranda (Top Section)"
        ]
      }
    },
    sculpturalHeritage: {
      title: "Sculptural Heritage",
      content: [
        "The temple is renowned for its rich sculptural wealth, featuring several notable elements that showcase the artistic mastery of ancient Odishan craftsmen."
      ],
      items: [
        "Naga-nagi stambha (Serpent Pillars)",
        "Saiva dwarapalas (Shaivite Door Guardians)", 
        "Lakulisa sculpture",
        "Navagrahas (Nine Planets)",
        "Astadikpalas (Eight Directional Guardians)"
      ]
    },
    nayikas: {
      title: "The Nayikas",
      content: [
        "The temple's celebrity status is largely attributed to its tall, slender, and sophisticated nayikas adorning the sanctum walls. These figures depict various emotions and activities, showcasing the daily life and expressions of women in ancient times."
      ],
      activities: {
        title: "Daily Activities",
        items: [
          "Attending to toilet",
          "Looking into mirror", 
          "Taking off anklet"
        ]
      },
      interactions: {
        title: "Interactions",
        items: [
          "Fondling her child",
          "Caressing pet bird",
          "Conversing with companions"
        ]
      },
      expressions: {
        title: "Expressions",
        items: [
          "Various emotional states",
          "Holding tree branch",
          "Playing musical instruments"
        ]
      }
    },
    decorativeArt: {
      title: "Decorative Artistry",
      content: [
        "The temple walls are adorned with intricate scroll motifs featuring lush foliages, detailed creepers, and vanalata (forest vines). Each design contains independent foliage patterns, creating a unique artistic expression that enhances the temple's overall aesthetic appeal."
      ]
    },
    historicalDating: {
      title: "Historical Dating",
      content: "Based on its sculptural art and architectural style, scholars have dated this temple to approximately the mid-11th century AD, marking a significant period in Odishan temple architecture."
    },
    gardenComplex: {
      title: "Garden Complex", 
      content: "A stunning garden complex with thoughtful landscaping has been developed around the monument, enhancing its natural beauty and providing a serene environment for visitors."
    },
    video: {
      'frame': '<iframe width="560" height="315" src="https://www.youtube.com/embed/0fhk4ffiugE?si=jxX2bIQjzaBATI8k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    }
  },
  hi: {
    title: "राजारानी मंदिर",
    subtitle: "ओडिशा की वास्तुकला का उत्कृष्ट उदाहरण",
    location: "20°15'N, 85°50'E • भुवनेश्वर, ओडिशा",
    historicalOverview: {
      title: "ऐतिहासिक अवलोकन",
      content: [
        "राजारानी मंदिर, जिसे पहले इंद्रेश्वर शिव मंदिर के नाम से जाना जाता था, प्राचीन ओडिशा की वास्तुकला की प्रतिभा का एक प्रमाण है। यह मंदिर लिंगराज मंदिर के उत्तर-पूर्व में स्थित है और अपनी मूर्तिकला और अलंकृत डिजाइन के लिए प्रसिद्ध है।",
        "इस मंदिर का नाम 'राजारानी' इसके निर्माण में उपयोग किए गए महीन दानेदार पीले बलुआ पत्थर से मिला है। यह विशेष पत्थर, जो स्थानीय रूप से राजरानिया के नाम से जाना जाता है, मंदिर को एक विशिष्ट एम्बर रंग प्रदान करता है।"
      ]
    },
    architecturalComposition: {
      title: "वास्तुकला रचना",
      primaryStructure: {
        title: "प्राथमिक संरचना",
        items: [
          "पूर्वी अभिविन्यास",
          "गर्भगृह (देउल) की ऊंचाई: 17.9 मीटर",
          "पंचरथा योजना और वक्र रेखीय अधिरचना", 
          "तीन-मोल्डेड प्लेटफॉर्म आधार"
        ]
      },
      panchangaBada: {
        title: "पंचांग बाड़ा (पांच विभाजन)",
        items: [
          "1. पाभाग (आधार)",
          "2. तालाजंघा (निचली दीवार)",
          "3. बंधन (बाध्यकारी)",
          "4. उपरजंघा (ऊपरी दीवार)", 
          "5. बारंडा (शीर्ष खंड)"
        ]
      }
    },
    sculpturalHeritage: {
      title: "मूर्तिकला विरासत",
      content: [
        "मंदिर अपनी समृद्ध मूर्तिकला विरासत के लिए प्रसिद्ध है, जो प्राचीन ओडिशा के शिल्पकारों की कलात्मक महारत को प्रदर्शित करती है।"
      ],
      items: [
        "नाग-नागी स्तंभ",
        "शैव द्वारपाल",
        "लकुलीसा मूर्ति",
        "नवग्रह",
        "अष्टदिकपाल (आठ दिशाओं के रक्षक)"
      ]
    },
    nayikas: {
      title: "नायिकाएँ",
      content: [
        "मंदिर की दीवारों पर नायिकाओं की मूर्तियाँ हैं, जो विभिन्न भावनाओं और गतिविधियों को दर्शाती हैं। इन मूर्तियों में प्राचीन काल की महिलाओं के दैनिक जीवन और अभिव्यक्तियों का चित्रण है।"
      ],
      activities: {
        title: "दैनिक गतिविधियाँ",
        items: [
          "शौच में भाग लेना",
          "दर्पण में देखना",
          "पायल उतारना"
        ]
      },
      interactions: {
        title: "बातचीत",
        items: [
          "अपने बच्चे को प्यार करना",
          "पालतू पक्षी को सहलाना",
          "साथियों के साथ बातचीत"
        ]
      },
      expressions: {
        title: "भावनाएं",
        items: [
          "विभिन्न भावनात्मक अवस्थाएं",
          "पेड़ की शाखा पकड़ना",
          "संगीत वाद्ययंत्र बजाना"
        ]
      }
    },
    decorativeArt: {
      title: "अलंकृत कला",
      content: [
        "मंदिर की दीवारों पर जटिल स्क्रॉल मोटिफ़ हैं, जिनमें लचीली पत्तियाँ, विस्तृत लता और वनलता शामिल हैं। प्रत्येक डिज़ाइन में स्वतंत्र पत्ती पैटर्न हैं, जो एक अद्वितीय कलात्मक अभिव्यक्ति बनाते हैं।"
      ]
    },
    historicalDating: {
      title: "ऐतिहासिक तिथि",
      content: "विद्वानों ने मंदिर की मूर्तिकला और वास्तुकला शैली के आधार पर इसे लगभग 11वीं शताब्दी के मध्य में निर्मित माना है, जो ओडिशा की मंदिर वास्तुकला में एक महत्वपूर्ण अवधि है।"
    },
    gardenComplex: {
      title: "उद्यान परिसर",
      content: "मंदिर के आसपास एक सुंदर उद्यान परिसर विकसित किया गया है, जो इसकी प्राकृतिक सुंदरता को बढ़ाता है और दर्शकों के लिए एक शांत वातावरण प्रदान करता है।"
    },
    video: {
      'frame': '<iframe width="560" height="315" src="https://www.youtube.com/embed/0fhk4ffiugE?si=jxX2bIQjzaBATI8k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    }
  },
  or: {
    title: "ରାଜାରାଣୀ ମନ୍ଦିର",
    subtitle: "ଓଡିଶା ସ୍ଥାପତ୍ୟର ଉତ୍କୃଷ୍ଟ ଉଦାହରଣ",
    location: "20°15'N, 85°50'E • ଭୁବନେଶ୍ୱର, ଓଡ଼ିଶା",
    historicalOverview: {
      title: "ଐତିହାସିକ ସାରାଂଶ",
      content: [
        "ପୂର୍ବରୁ ଇନ୍ଦ୍ରେଶ୍ୱର ଶିବ ମନ୍ଦିର ଭାବରେ ଜଣାଶୁଣା ରାଜରାଣୀ ମନ୍ଦିର, ପ୍ରାଚୀନ ଓଡ଼ିଶାର ସ୍ଥାପତ୍ୟ ଚମତ୍କାରତାର ପ୍ରମାଣ। ମନ୍ଦିରଟି ଲିଙ୍ଗରାଜ ମନ୍ଦିରର ଉତ୍ତର-ପୂର୍ବରେ ଅବସ୍ଥିତ ଏବଂ ଏହାର ମୂର୍ତ୍ତି ଏବଂ ଅଳଙ୍କାରିତ ଡିଜାଇନ୍ ପାଇଁ ପ୍ରସିଦ୍ଧ।",
        "ଏହି ମନ୍ଦିରର ନାମ 'ରାଜାରାଣୀ' ଏହାର ନିର୍ମାଣରେ ବ୍ୟବହୃତ ସୂକ୍ଷ୍ମ ଦାନାଦାର ହଳଦିଆ ବାଲୁକା ପଥରରୁ ଆସିଛି। ଏହି ବିଶେଷ ପଥର, ଯାହା ସ୍ଥାନୀୟ ଭାବରେ ରାଜରାନିଆ ନାମରେ ଜଣାଶୁଣା, ମନ୍ଦିରକୁ ଏକ ସ୍ୱତନ୍ତ୍ର ଆମ୍ବର ରଙ୍ଗ ପ୍ରଦାନ କରିଥାଏ।"
      ]
    },
    architecturalComposition: {
      title: "ସ୍ଥାପତ୍ୟ ଡିଜାଇନ୍",
      primaryStructure: {
        title: "ପ୍ରାଥମିକ ଗଠନ",
        items: [
          "ପୂର୍ବ ଦିଗ",
          "ଗର୍ଭଗୃହ (ଦେଉଳ) ଉଚ୍ଚତା: ୧୭.୯ ମିଟର",
          "ପଞ୍ଚରଥ ଯୋଜନା ଏବଂ ବକ୍ର ରେଖା ଉପର ଗଠନ",
          "ତିନି-ମୋଲ୍ଡେଡ୍ ପ୍ଲାଟଫର୍ମ ଆଧାର"
        ]
      },
      panchangaBada: {
        title: "ପଞ୍ଚାଙ୍ଗ ବଡ଼ (ପାଞ୍ଚଟି ବିଭାଜନ)",
        items: [
          "୧. ପାଭାଗ (ଆଧାର)",
          "୨. ତାଳଜଙ୍ଘ (ତଳ କାନ୍ଥ)",
          "୩. ବନ୍ଧନ (ବନ୍ଧନ)",
          "୪. ଉପରାଜଙ୍ଘ (ଉପର କାନ୍ଥ)",
          "୫. ବରଣ୍ଡା (ଉପର ବିଭାଗ)"
        ]
      }
    },
    sculpturalHeritage: {
      title: "ଭାସ୍କର୍ଯ୍ୟ ଐତିହ୍ୟ",
      content: [
        "ମନ୍ଦିରଟି ଏହାର ସମୃଦ୍ଧ ଭାସ୍କର୍ଯ୍ୟ ଐତିହ୍ୟ ପାଇଁ ପ୍ରସିଦ୍ଧ, ଯାହା ପ୍ରାଚୀନ ଓଡ଼ିଶାର ଶିଳ୍ପକାରମାନଙ୍କର କଳାତ୍ମକ ଦକ୍ଷତାକୁ ପ୍ରଦର୍ଶନ କରିଥାଏ।"
      ],
      items: [
        "ନାଗ-ନାଗୀ ସ୍ତମ୍ଭ",
        "ଶୈବୀ ଦ୍ୱାରପାଳ",
        "ଲାକୁଳିଶା ମୂର୍ତ୍ତି",
        "ନବଗ୍ରହ",
        "ଅଷ୍ଟଦିକପାଳ (ଆଠ ଦିଗର ରକ୍ଷକ)"
      ]
    },
    nayikas: {
      title: "ନାୟିକା",
      content: [
        "ମନ୍ଦିର କାନ୍ଥରେ ନାୟିକାମାନଙ୍କ ମୂର୍ତ୍ତି ଅଛି, ଯାହା ବିଭିନ୍ନ ଭାବନା ଏବଂ କାର୍ଯ୍ୟକଳାପକୁ ଚିତ୍ରଣ କରିଥାଏ। ଏହି ମୂର୍ତ୍ତିଗୁଡ଼ିକରେ ପ୍ରାଚୀନ କାଳର ମହିଳାମାନଙ୍କର ଦୈନନ୍ଦିନ ଜୀବନ ଏବଂ ଅଭିବ୍ୟକ୍ତିର ଚିତ୍ରଣ ରହିଛି।"
      ],
      activities: {
        title: "ଦୈନନ୍ଦିନ କାର୍ଯ୍ୟକଳାପ",
        items: [
          "ଶୌଚାଳୟରେ ଯତ୍ନ ନେବା",
          "ଦର୍ପଣରେ ଦେଖିବା",
          "ନୂପୁର କାଢ଼ିବା"
        ]
      },
      interactions: {
        title: "କଥାବାର୍ତ୍ତା",
        items: [
          "ନିଜ ସନ୍ତାନକୁ ସ୍ନେହ କରିବା",
          "ପୋଷା ପକ୍ଷୀକୁ ସ୍ନେହ କରିବା",
          "ସାଥୀମାନଙ୍କ ସହ କଥାବାର୍ତ୍ତା"
        ]
      },
      expressions: {
        title: "ଭାବନା",
        items: [
          "ବିଭିନ୍ନ ଭାବନାତ୍ମକ ଅବସ୍ଥା",
          "ଗଛ ଡାଳ ଧରିବା",
          "ସଙ୍ଗୀତ ବାଦ୍ୟଯନ୍ତ୍ର ବଜାଇବା"
        ]
      }
    },
    decorativeArt: {
      title: "ସାଜସଜ୍ଜା କଳା",
      content: [
        "ମନ୍ଦିର କାନ୍ଥରେ ଜଟିଳ ସ୍କ୍ରୋଲ୍ ମୋଟିଫ୍ ଅଛି, ଯେଉଁଥିରେ ନମନୀୟ ପତ୍ର, ବିସ୍ତୃତ ଲତା ଏବଂ ଲତା ଅନ୍ତର୍ଭୁକ୍ତ। ପ୍ରତ୍ୟେକ ଡିଜାଇନରେ ସ୍ୱାଧୀନ ପତ୍ର ଢାଞ୍ଚା ଅଛି, ଯାହା ଏକ ଅନନ୍ୟ କଳାତ୍ମକ ପ୍ରକାଶନ ସୃଷ୍ଟି କରେ।"
      ]
    },
    historicalDating: {
      title: "ଐତିହାସିକ ତାରିଖ",
      content: "ବିଦ୍ୱାନମାନେ ଏହାର ମୂର୍ତ୍ତି ଏବଂ ସ୍ଥାପତ୍ୟ ଶୈଳୀ ଉପରେ ଆଧାର କରି ମନ୍ଦିରକୁ ପ୍ରାୟ ୧୧ ଶତାବ୍ଦୀର ମଧ୍ୟଭାଗକୁ ତାରିଖ ଦିଅନ୍ତି, ଯାହା ଓଡ଼ିଶାର ମନ୍ଦିର ସ୍ଥାପତ୍ୟରେ ଏକ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ସମୟ।"
    },
    gardenComplex: {
      title: "ବଗିଚା ସଂକଳନ",
      content: "ମନ୍ଦିର ଚାରିପାଖରେ ଏକ ସୁନ୍ଦର ଉଦ୍ୟାନ ସଂକଳନ ବିକଶିତ ହୋଇଛି, ଯାହା ଏହାର ପ୍ରାକୃତିକ ସୌନ୍ଦର୍ଯ୍ୟକୁ ବୃଦ୍ଧି କରେ ଏବଂ ପରିଦର୍ଶକମାନଙ୍କ ପାଇଁ ଏକ ଶାନ୍ତ ପରିବେଶ ପ୍ରଦାନ କରେ।"
    },
    video: {
      'frame': '<iframe width="560" height="315" src="https://www.youtube.com/embed/0fhk4ffiugE?si=jxX2bIQjzaBATI8k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    }
  }
};

function App() {
  const [language, setLanguage] = useState<Language>('en');
  const currentContent = content[language];

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Language Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-2 flex gap-1">
          <button
            onClick={() => setLanguage('en')}
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              language === 'en' 
                ? 'bg-amber-600 text-white' 
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLanguage('hi')}
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              language === 'hi' 
                ? 'bg-amber-600 text-white' 
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            हिं
          </button>
          <button
            onClick={() => setLanguage('or')}
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              language === 'or' 
                ? 'bg-amber-600 text-white' 
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            ଓଡ଼ି
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div 
        className="h-screen relative flex items-center justify-center"
        style={{
          backgroundImage: 'url("https://resonancemedia.co.in.smmedia.co.in/wp-content/uploads/2025/02/1-Cover-Photo-scaled.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">{currentContent.title}</h1>
          <p className="text-xl md:text-2xl mb-6">{currentContent.subtitle}</p>
          <div className="flex items-center justify-center gap-2 text-lg">
            <MapPin className="w-5 h-5" />
            <span>{currentContent.location}</span>
          </div>
          <div className="mt-12 animate-bounce">
            <ChevronDown className="w-8 h-8" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Introduction */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">{currentContent.historicalOverview.title}</h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            {currentContent.historicalOverview.content.map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
            
            {/* YouTube Video */}
            <div className="mt-6">
              {{currentContent.video.frame}}
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Temple Gallery</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative group">
              <img 
                src="https://resonancemedia.co.in.smmedia.co.in/wp-content/uploads/2025/02/2-Front-View-of-Rajarani-Temple-scaled.jpg"
                alt="Front View of Rajarani Temple"
                className="w-full h-80 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4 rounded-b-lg">
                <h3 className="text-lg font-semibold">Front View</h3>
                <p className="text-sm">Majestic entrance of the temple</p>
              </div>
            </div>
            <div className="relative group">
              <img 
                src="https://resonancemedia.co.in.smmedia.co.in/wp-content/uploads/2025/02/3-Panels-on-the-Deul.jpg"
                alt="Decorative Panels on the Deul"
                className="w-full h-80 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4 rounded-b-lg">
                <h3 className="text-lg font-semibold">Deul Panels</h3>
                <p className="text-sm">Intricate sculptural details</p>
              </div>
            </div>
            <div className="relative group">
              <img 
                src="https://resonancemedia.co.in.smmedia.co.in/wp-content/uploads/2025/02/4-Nayika.jpg"
                alt="Nayika Sculpture"
                className="w-full h-80 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4 rounded-b-lg">
                <h3 className="text-lg font-semibold">Nayika</h3>
                <p className="text-sm">Graceful female figure sculpture</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <FeatureCard 
            icon={<Architecture />}
            title="Architectural Style"
            description="Pancharatha design with curvilinear superstructure (rekha sikhara), similar to Khajuraho's Kandariya Mahadeva temple."
          />
          <FeatureCard 
            icon={<History />}
            title="Historical Significance"
            description="Originally known as Indresvara Siva Temple, representing a crucial phase in Odishan temple architecture."
          />
          <FeatureCard 
            icon={<Camera />}
            title="Sculptural Excellence"
            description="Features exquisite sculptures including naga-nagi stambha and saiva dwarapalas, showcasing Saivite affiliation."
          />
          <FeatureCard 
            icon={<Palette />}
            title="Material Beauty"
            description="Built with yellowish Rajarania sandstone, giving the temple its unique amber appearance."
          />
        </div>

        {/* Architectural Details */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">{currentContent.architecturalComposition.title}</h2>
          
          {/* Structure Overview */}
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">{currentContent.architecturalComposition.primaryStructure.title}</h3>
              <ul className="space-y-4 text-gray-600">
                {currentContent.architecturalComposition.primaryStructure.items.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 text-amber-600 flex-shrink-0">
                      {index === 0 && <Compass className="w-5 h-5" />}
                      {index === 1 && <Architecture className="w-5 h-5" />}
                      {index === 2 && <Columns className="w-5 h-5" />}
                      {index === 3 && <Ruler className="w-5 h-5" />}
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">{currentContent.architecturalComposition.panchangaBada.title}</h3>
              <ul className="space-y-3 text-gray-600">
                {currentContent.architecturalComposition.panchangaBada.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Detailed Features */}
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Pabhaga Components</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Khura (Base Moulding)</li>
                <li>• Kumbha (Pot-Shaped Moulding)</li>
                <li>• Patta (Flat Band)</li>
                <li>• Kani (Recess)</li>
                <li>• Basanta (Spring Season Moulding)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Superstructure Elements</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Gandi (Main Tower)</li>
                <li>• Angasikharas (Miniature Turrets)</li>
                <li>• Amalaka (Fluted Disc)</li>
                <li>• Kalasa (Crowning Vase)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Jagamohana Section */}
        <div className="bg-amber-50 rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">The Jagamohana (Porch)</h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-4">
              The Jagamohana presents a striking contrast to the ornate sanctum with its relatively plain appearance. While originally intended to be decorated, it appears to have been left incomplete. Unlike its rectangular predecessors in earlier temples, this Jagamohana features a square plan, marking an evolution in temple architecture.
            </p>
            <p className="mb-4">
              The interior of the Jagamohana, like the sanctum, is devoid of ornamentation. Historical records indicate extensive conservation work was carried out on the Jagamohana before the Archaeological Survey of India assumed responsibility for the temple's preservation.
            </p>
          </div>
        </div>

        {/* Sculptural Details */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">{currentContent.sculpturalHeritage.title}</h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            {currentContent.sculpturalHeritage.content.map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
            <ul className="space-y-3">
              {currentContent.sculpturalHeritage.items.map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Astadikpalas and Nayikas */}
        <div className="bg-stone-100 rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Sculptural Masterpieces</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Astadikpalas (Guardians)</h3>
              <div className="prose prose-lg text-gray-600">
                <p>
                  The temple's central facade features outstanding standing astadikpalas on the jangha portion. These guardians, clad in diaphanous drapery, stand gracefully on lotus pedestals with their mounts below. The Varuna figure is particularly remarkable for its:
                </p>
                <ul>
                  <li>Intricate body ornamentation</li>
                  <li>Elaborate coiffure</li>
                  <li>Expressive facial features</li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Divine Scenes</h3>
              <div className="prose prose-lg text-gray-600">
                <p>Notable divine depictions include:</p>
                <ul>
                  <li>Marriage scene of Siva</li>
                  <li>Nataraja in dance pose</li>
                  <li>Parvati in various forms</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Nayikas Section */}
        <div className="bg-amber-50 rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">{currentContent.nayikas.title}</h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            {currentContent.nayikas.content.map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold mb-2">{currentContent.nayikas.activities.title}</h4>
                <ul>
                  {currentContent.nayikas.activities.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold mb-2">{currentContent.nayikas.interactions.title}</h4>
                <ul>
                  {currentContent.nayikas.interactions.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold mb-2">{currentContent.nayikas.expressions.title}</h4>
                <ul>
                  {currentContent.nayikas.expressions.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">{currentContent.decorativeArt.title}</h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            {currentContent.decorativeArt.content.map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Dating and Garden */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-stone-100 rounded-lg shadow-lg p-8">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-6 h-6 text-amber-600" />
              <h2 className="text-2xl font-bold text-gray-800">{currentContent.historicalDating.title}</h2>
            </div>
            <p className="text-gray-600">
              {currentContent.historicalDating.content}
            </p>
          </div>
          <div className="bg-stone-100 rounded-lg shadow-lg p-8">
            <div className="flex items-center gap-3 mb-4">
              <Leaf className="w-6 h-6 text-amber-600" />
              <h2 className="text-2xl font-bold text-gray-800">{currentContent.gardenComplex.title}</h2>
            </div>
            <p className="text-gray-600">
              {currentContent.gardenComplex.content}
            </p>
          </div>
        </div>

        {/* References Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-6 h-6 text-amber-600" />
            <h2 className="text-2xl font-bold text-gray-800">References</h2>
          </div>
          <div className="prose prose-lg max-w-none text-gray-600">
            <ul className="space-y-3 list-none pl-0">
              <li className="flex gap-2">
                <span className="text-amber-600">•</span>
                <span>D. Mitra, Bhubaneswar, ASI, New Delhi, 1958.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-amber-600">•</span>
                <span>K. C. Panigrahi, Archaeological Remains at Bhubaneswar, Calcutta, 1961.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-amber-600">•</span>
                <span>K. S. Behera, Temples of Orissa, Odisha Sahitya Academy, Bhubaneswar, 1993.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-amber-600">•</span>
                <span>T. E. Donaldson, Hindu Temple Art of Orissa, Vol. II, E. J. Brill, Leiden, 1986.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-amber-600">•</span>
                <span>C. L. Fabin, History of Art of Orissa, Calcutta, 1974.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Rajarani Temple Heritage Site. Protected by Archaeological Survey of India.
          </p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
        <div className="text-amber-600">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default App;