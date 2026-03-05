import React, { useState } from 'react';
import { MapPin, History, Archive as Architecture, Compass, Columns, ChevronDown, Ruler, Leaf, Calendar, BookOpen } from 'lucide-react';

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
    detailedFeatures: {
      pabhaga: {
        title: string;
        items: string[];
      };
      superstructure: {
        title: string;
        items: string[];
      };
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
  gallery: {
    title: string;
    items: {
      image: string;
      alt: string;
      title: string;
      subtitle: string;
    }[];
  };
  keyFeatures: {
    architecture: {
      title: string;
      description: string;
    };
    history: {
      title: string;
      description: string;
    };
  };
  jagamohana: {
    title: string;
    content: string[];
  };
  sculpturalMasterpieces: {
    title: string;
    astadikpalas: {
      title: string;
      content: string;
      items: string[];
    };
    divineScenes: {
      title: string;
      content: string;
      items: string[];
    };
  };
  references: {
    title: string;
    items: string[];
  };
  footer: {
    text: string;
  };
}

const content: Record<Language, ContentData> = {
  en: {
    title: "Rajarani Temple",
    subtitle: "A Masterpiece of Odishan Architecture",
    location: "20°15'N, 85°50'E • Bhubaneswar, Odisha",
    historicalOverview: {
      title: "Historical Overview",
      content: [
        "The Rajarani temple, originally known as the Indresvara Siva Temple, stands as a testament to the architectural brilliance of ancient Odisha. Located in the north-east of Lingaraj Temple, this remarkable structure represents a unique experiment in temple architecture, distinguished by its sculptural excellence and ornate design.",
        "The temple derives its current name ‘Rajarani’ from the fine-grained yellowish sandstone used in its construction. The special stone, known locally as Rajarania, gives the temple its distinctive amber hue that has mellowed beautifully with time, enhancing its architectural splendor."
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
          "1.	Pabhaga (Mouldings at the base of the temple)",
            "2.	Talajangha (Lower wall portion of the temple)",
            "3.	Bandhana (Horizontal mouldings along the wall)",
            "4.	Uparajangha (Upper wall portion of the temple)",
            "5.	Baranda (Mouldings forming the top element of the bada)"
        ]
      },
      detailedFeatures: {
        pabhaga: {
          title: "Pabhaga Components",
          items: [
            "Khura (Base moulding in the form of a hoop)",
            "Kumbha (Pot-shaped moulding)",
            "Patta (Flat band)",
            "Kani (Projecting edge)",
            "Basanta (Top moulding of the pabhaga)"
          ]
        },
        superstructure: {
          title: "Superstructure Elements",
          items: [
            "Gandi (Sikhara or curvilinear spire above the bada)",
            "Angasikharas (Miniature turrets)",
            "Amalaka (Fluted disc)",
            "Kalasa (Crowning vase)"
          ]
        }
      }
    },
    sculpturalHeritage: {
      title: "Sculptural Heritage",
      content: [
        "The temple is renowned for its rich sculptural wealth, featuring several notable elements that showcase the artistic mastery of ancient Odishan craftsmen."
      ],
      items: [
        "Naga-nagi stambha (Serpent pillar)",
        "Saiva dwarapalas (Shaivite Door Guardians)",
        "Lakulisa sculpture",
        "Navagrahas (Nine Planets)",
        "Astadikpalas (Eight Directional Guardians)",
        "Nayika figures",
        "Mithuna figures"
      ]
    },
    nayikas: {
      title: "The Nayikas",
      content: [
        "The temple’s celebrity status is largely attributed to its tall, slender and sophisticated nayikas adorning the sanctum walls. These figures depict various emotions and activities, showcasing the daily life and expressions of women in ancient times."
      ],
      activities: {
        title: "Daily Activities",
        items: [
          "Attending to toilet",
          "Looking into mirror", 
          "Removing anklet"
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
        "The temple walls are adorned with intricate scroll motifs featuring lush foliages, detailed creepers and vanalata (forest vines). Each design contains independent foliage patterns, creating a unique artistic expression that enhances the temple’s overall aesthetic appeal."
      ]
    },
    historicalDating: {
      title: "Historical Dating",
      content: "Based on its sculptural art and architectural style, scholars have dated this temple to approximately the mid 11th century AD, marking a significant period in Odishan temple architecture."
    },
    gardenComplex: {
      title: "Garden Complex", 
      content: "A stunning garden complex with thoughtful landscaping has been developed around the monument, enhancing its natural beauty and providing a serene environment for visitors."
    },
    video: {
      'frame': '<iframe width="560" height="315" src="https://www.youtube.com/embed/z2HujO_Kl64?si=1wzYCD1iX31Zu-ah" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    gallery: {
      title: "Temple Gallery",
      items: [
        {
          image: "https://resonancemedia.co.in.smmedia.co.in/wp-content/uploads/2025/02/2-Front-View-of-Rajarani-Temple-scaled.jpg",
          alt: "Front View of Rajarani Temple",
          title: "Front View",
          subtitle: "Majestic entrance of the temple"
        },
        {
          image: "https://resonancemedia.co.in.smmedia.co.in/wp-content/uploads/2025/02/3-Panels-on-the-Deul.jpg",
          alt: "Decorative Panels on the Deul",
          title: "Deul Panels",
          subtitle: "Intricate sculptural details"
        },
        {
          image: "https://resonancemedia.co.in.smmedia.co.in/wp-content/uploads/2025/02/4-Nayika.jpg",
          alt: "Nayika Sculpture",
          title: "Nayika",
          subtitle: "Graceful female figure sculpture"
        }
      ]
    },
    keyFeatures: {
      architecture: {
        title: "Architectural Style",
        description: "Pancharatha design with curvilinear superstructure (rekha sikhara)."
      },
      history: {
        title: "Historical Significance",
        description: "Originally known as Indresvara Siva Temple, representing a crucial phase in Odishan temple architecture."
      }
    },
    jagamohana: {
      title: "The Jagamohana (Porch)",
      content: [
        "The jagamohana presents a striking contrast to the ornate sanctum with its relatively plain appearance. While originally intended to be decorated, it appears to have been left incomplete. Unlike its rectangular predecessors in earlier temples, this jagamohana features a square plan, marking an evolution in temple architecture. The interior of the jagamohana, like the sanctum, is devoid of ornamentation."
      ]
    },
    sculpturalMasterpieces: {
      title: "Sculptural Masterpieces",
      astadikpalas: {
        title: "Astadikpalas (Guardians)",
        content: "The temple’s façade features outstanding standing astadikpalas on the jangha portion. These guardians, clad in diaphanous drapery, stand gracefully on lotus pedestals with their mounts below. The Varuna figure is particularly remarkable for its intricate body ornamentation, elaborate coiffure and expressive facial features.",
        items: [
         ""
        ]
      },
      divineScenes: {
        title: "Divine Scenes",
        content: "Notable divine depictions include:",
        items: [
          "Marriage scene of Siva",
          "Nataraja in dance pose",
          "Parvati in various forms"
        ]
      }
    },
    references: {
      title: "References",
      items: [
        "D. Mitra, Bhubaneswar, ASI, New Delhi, 1958.",
        "K. C. Panigrahi, Archaeological Remains at Bhubaneswar, Calcutta, 1961.",
        "K. S. Behera, Temples of Orissa, Odisha Sahitya Academy, Bhubaneswar, 1993.",
        "T. E. Donaldson, Hindu Temple Art of Orissa, Vol. II, E. J. Brill, Leiden, 1986.",
        "C. L. Fabin, History of Art of Orissa, Calcutta, 1974."
      ]
    },
    footer: {
      text: "© {year} Rajarani Temple Heritage Site. Protected by Archaeological Survey of India."
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
      },
      detailedFeatures: {
        pabhaga: {
          title: "पाभाग के घटक",
          items: [
            "खुरा (आधार मोल्डिंग)",
            "कणि (अवकाश)",
            "बसंत (वसंत ऋतु मोल्डिंग)"
          ]
        },
        superstructure: {
          title: "अधिरचना के तत्व",
          items: [
            "अंगशिखर (लघु बुर्ज)",
            "आमलक (नालीदार डिस्क)",
            "कलश (शिखर कलश)"
          ]
        }
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
      'frame': '<iframe width="560" height="315" src="https://www.youtube.com/embed/4qOT5l0pC9c?si=Sc43vT0OL7ATnpUn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    gallery: {
      title: "मंदिर गैलेरी",
      items: [
        {
          image: "https://resonancemedia.co.in.smmedia.co.in/wp-content/uploads/2025/02/2-Front-View-of-Rajarani-Temple-scaled.jpg",
          alt: "राजारानी मंदिर का मुख दृश्य",
          title: "मुख दृश्य",
          subtitle: "मंदिर का भव्य प्रवेश द्वार"
        },
        {
          image: "https://resonancemedia.co.in.smmedia.co.in/wp-content/uploads/2025/02/3-Panels-on-the-Deul.jpg",
          alt: "देउल पर सजावटी पैनल",
          title: "देउल पैनल",
          subtitle: "सूक्ष्म मूर्तिकला विवरण"
        },
        {
          image: "https://resonancemedia.co.in.smmedia.co.in/wp-content/uploads/2025/02/4-Nayika.jpg",
          alt: "नायिका मूर्ति",
          title: "नायिका",
          subtitle: "सुगठित स्त्री मूर्ति"
        }
      ]
    },
    keyFeatures: {
      architecture: {
        title: "वास्तुकला शैली",
        description: "पंचरथ डिजाइन और वक्र रेखीय अधिरचना (रेखा शिखर)।"
      },
      history: {
        title: "ऐतिहासिक महत्व",
        description: "मूल रूप से इंद्रेश्वर शिव मंदिर के रूप में जाना जाता है, जो ओडिशा मंदिर वास्तुकला में एक महत्वपूर्ण चरण का प्रतिनिधित्व करता है।"
      }
    },
    jagamohana: {
      title: "जगमोहन (पोर्च)",
      content: [
        "जगमोहन अलंकृत गर्भगृह के विपरीत अपनी अपेक्षाकृत सादी बनावट के कारण एक आकर्षक कंट्रास्ट प्रस्तुत करता है। हालांकि इसे सजाने का मूल इरादा था, लेकिन ऐसा लगता है कि इसे अधूरा छोड़ दिया गया था। पहले के मंदिरों में आयताकार जगमोहन के विपरीत, यह जगमोहन एक वर्गाकार योजना पर आधारित है, जो मंदिर वास्तुकला में एक विकास को दर्शाता है।",
        "जगमोहन का आंतरिक भाग, गर्भगृह की तरह ही, अलंकरण रहित है।"
      ]
    },
    sculpturalMasterpieces: {
      title: "मूर्तिकला के उत्कृष्ट नमूने",
      astadikpalas: {
        title: "अष्टदिक्पाल (रक्षक)",
        content: "मंदिर के मुख्य भाग पर जंघा खंड में उत्कृष्ट खड़े अष्टदिक्पालों का चित्रण है। पारभासी वस्त्रों से सजे ये रक्षक अपने वाहनों के साथ कमल के आसन पर शान से खड़े हैं। वरुण की मूर्ति विशेष रूप से निम्नलिखित के लिए उल्लेखनीय है:",
        items: [
          "जटिल शारीरिक अलंकरण",
          "विस्तृत केश विन्यास",
          "अभिव्यंजक चेहरे की विशेषताएं"
        ]
      },
      divineScenes: {
        title: "दिव्य दृश्य",
        content: "उल्लेखनीय दिव्य चित्रणों में शामिल हैं:",
        items: [
          "शिव का विवाह दृश्य",
          "नृत्य मुद्रा में नटराज",
          "विभिन्न रूपों में पार्वती"
        ]
      }
    },
    references: {
      title: "संदर्भ",
      items: [
        "डी. मित्रा, भुवनेश्वर, ए.एस.आई. (ASI), नई दिल्ली, 1958.",
        "के. सी. पाणिग्रही, आर्कियोलॉजिकल रिमेंस एट भुवनेश्वर, कलकत्ता, 1961.",
        "के. एस. बेहरा, टेम्पल्स ऑफ उड़ीसा, ओडिशा साहित्य अकादमी, भुवनेश्वर, 1993.",
        "टी. ई. डोनाल्डसन, हिंदू टेम्पल आर्ट ऑफ उड़ीसा, वॉल्यूम II, ई. जे. ब्रिल, लीडेन, 1986.",
        "सी. एल. फैबिन, हिस्ट्री ऑफ आर्ट ऑफ उड़ीसा, कलकत्ता, 1974."
      ]
    },
    footer: {
      text: "© {year} राजारानी मंदिर विरासत स्थल। भारतीय पुरातत्व सर्वेक्षण द्वारा संरक्षित।"
    }
  },
  or: {
    title: "ରାଜାରାଣୀ ମନ୍ଦିର",
    subtitle: "ଓଡିଶା ସ୍ଥାପତ୍ୟର ଉତ୍କୃଷ୍ଟ ଉଦାହରଣ",
    location: "20°15'N, 85°50'E • ଭୁବନେଶ୍ୱର, ଓଡ଼ିଶା",
    historicalOverview: {
      title: "HZòjûiòK aòjwûaùfûK^",
      content: [
       "@ZúZùe Aù¦âgße gòa c¦òe bûaùe RYûgêYû eûRûeûYú c¦òe, _âûPú^ IWÿògûe iÚû_Zý I Kkûe CKôéÁ C\ûjeY @ùU û c¦òeUò fòweûR c¦òee Ce-_ìaðùe @aiÚòZ Gaõ Gjûe cìòð Gaõ @kuûeòZû _ûAñ _âiò¡ û",
	      "Gjò c¦òee ^ûc ‘eûRûeûYú’, Gjûe ^òcûðYùe aýajéZ AhZ jk\ò@û ewe aûfêKû _[eeê @ûiòQò û Gjò aòùgh _[e, ~ûjû iÚû^úd bûaùe eûReûYúd ^ûcùe RYûgêYû, c¦òeKê GK ÊZª ew _â\û^ Keò[ûG û"
      ]
    },
    architecturalComposition: {
      title: "ସ୍ଥାପତ୍ୟ ବିନ୍ୟାସ",
      primaryStructure: {
        title: "c¦òe iÚû_Zýe aòbò^Ü @w",
        items: [
          "_ìaðcêLú c¦òe",
          "MbðMéj (ù\Ck) CyZû : 17.9 còUe",
          "_e[ ùeLû gòLe",
          "ÊÌCy _òÂ"
        ]
      },
      panchangaBada: {
        title: "_ûw aûWÿ",
        items: [
          "1.	_û bûM",
          "2.	Zk Rx",
          "3.	a§^",
          "4.	C_e Rx",
          "5.	aeŠ"
        ]
      },
      detailedFeatures: {
        pabhaga: {
          title: "_û bûMe aòbò^Ü @w",
          items: [
            "Lêe",
            "Kê¸",
            "_Uû",
            "Kû^ò",
            "ai«"
          ]
        },
        superstructure: {
          title: "gòLee aòbò^Ü @w",
          items: [
            "_e[ MŠò",
            "@wgòLe",
            "@cæ",
            "Kki"
          ]
        }
      }
    },
    sculpturalHeritage: {
      title: "bûÄ~ýð HZòjý",
      content: [
        "c¦òeUò Gjûe icé¡ bûÄ~ýð HZòjý _ûAñ _âiò¡, ~ûjû _âûPú^ IWÿògûe gòÌKûecû^ue KkûcôK \lZûKê _â\gð^ Keò[ûG û"
      ],
      items: [
        "^ûM-^ûMú É¸",
        "ùg÷a \ßûe_ûk",
        "fKêkòg cìòð",
        "^aMâj",
        "@Á\òM_ûk",
        "^ûdòKû",
        "cò[ê^",
      ]
    },
    nayikas: {
      title: "^ûdòKû",
      content: [
        "c¦òe aûjý Kû^Úùe ^ûdòKûcû^u cìòð @Qò, ~ûjû aòbò^Ü bûa^û Gaõ Kû~ýðKkû_Kê PòZâY Keò[ûG  û"
      ],
      activities: {
        title: "ù\÷^¦ò^ Kû~ýðKkû_",
        items: [
          "ùg÷ûPûkdùe iûRi{û",
          "\_ðYùe cêLŠk \gð^",
          "_û\eê ^ì_êe @_iûeY"
        ]
      },
      interactions: {
        title: "Kù[û_K[^",
        items: [
          "^òR i«û^Kê ùiÜj Keòaû",
          "ù_ûhû _lúKê ùiÜj Keòaû",
          "iû[úcû^u ij aûûðkû_"
        ]
      },
      expressions: {
        title: "bûabwú",
        items: [
          "aòbò^Ü bûa^ûcôK @aiÚû",
          "aòbò^Ü bûa^ûcôK @aiÚû",
          "iwúZ aû\ý~ª aû\^"
        ]
      }
    },
    decorativeArt: {
      title: "ଅଳଙ୍କାରିତ କଳା",
      content: [
        "ମନ୍ଦିର କାନ୍ଥରେ ଜଟିଳ ସ୍କ୍ରୋଲ୍ ମୋଟିଫ୍ ଅଛି, ଯେଉଁଥିରେ ନମନୀୟ ପତ୍ର, ବିସ୍ତୃତ ଲତା ଏବଂ ଲତା ଅନ୍ତର୍ଭୁକ୍ତ। ପ୍ରତ୍ୟେକ ଡିଜାଇନରେ ସ୍ୱାଧୀନ ପତ୍ର ଢାଞ୍ଚା ଅଛି, ଯାହା ଏକ ଅନନ୍ୟ କଳାତ୍ମକ ପ୍ରକାଶନ ସୃଷ୍ଟି କରେ।",
        "କାନ୍ଥର ଲତା-ବନଲତା ମୋଟିଫ୍‌ରେ ସ୍ୱାଧୀନ ପତ୍ର ରୂପାୟଣ ଦେଖାଯାଏ।"
      ]
    },
    historicalDating: {
      title: "HZòjûiòK icd",
      content: "aò\ßû^cûù^ Gjûe cìòð Gaõ iÚû_Zý ùg÷kú C_ùe @û]ûe Keò c¦òee ^òcûðY Kûk _âûd GKû\g gZû±úe c¤bûMKê ^ò¡ûðeY KeòQ«ò, ~ûjû IWÿògûe c¦òe iÚû_Zýùe GK MêeêZß_ì‰ð icd û"
    },
    gardenComplex: {
      title: "C\ýû^",
      content: "c¦òe Pûeò_ûLùe GK iê¦e C\ýû^ aòKgòZ ùjûAQò, ~ûjû Gjûe _âûKéZòK ùiø¦~ýðKê aé¡ò Kùe Gaõ _eò\gðKcû^u _ûAñ GK gû« _eòùag _â\û^ Kùe û"
    },
    video: {
      'frame': '<iframe width="560" height="315" src="https://www.youtube.com/embed/0fhk4ffiugE?si=jxX2bIQjzaBATI8k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    gallery: {
      title: "ମନ୍ଦିର ଗ୍ୟାଲେରୀ",
      items: [
        {
          image: "https://resonancemedia.co.in.smmedia.co.in/wp-content/uploads/2025/02/2-Front-View-of-Rajarani-Temple-scaled.jpg",
          alt: "c¦òee i¹êL \égý",
          title: "c¦òee i¹êL \égý",
          subtitle: "ମନ୍ଦିରର ଅତି ଅଲଙ୍କାରିତ ପ୍ରବେଶଦ୍ୱାର"
        },
        {
          image: "https://resonancemedia.co.in.smmedia.co.in/wp-content/uploads/2025/02/3-Panels-on-the-Deul.jpg",
          alt: "ଦେଉଳରେ ସୌନ୍ଦର୍ଯ୍ୟମୟ ପ୍ୟାନେଲ",
          title: "c¦òee bûÄ~ýðeûRò",
          subtitle: "ସୁକ୍ଷ୍ମ ଭାସ୍କର୍ଯ୍ୟ ସୂଚନା"
        },
        {
          image: "https://resonancemedia.co.in.smmedia.co.in/wp-content/uploads/2025/02/4-Nayika.jpg",
          alt: "ନାୟିକା ମୂର୍ତ୍ତି",
          title: "^ûdòKû",
          subtitle: "ସୁନ୍ଦର ନାୟିକା ମୂର୍ତ୍ତିର ଦୃଶ୍ୟ"
        }
      ]
    },
    keyFeatures: {
      architecture: {
        title: "iÚû_Zý ùg÷kú",
        description: "c¦òeUò _e[aògòÁ ùeLû ùg÷kúùe ^òcðòZ û"
      },
      history: {
        title: "HZòjûiòK cjß",
        description: "@ZúZùe Aù¦âgße gòa ^ûcùe LýûZ Gjò c¦òe Kkòw ùg÷kú c¦òe iÚû_Zýe GK @^^ý C\ûjeY û "
      }
    },
    jagamohana: {
      title: "RMùcûj^",
      content: [
        "c¦òe Zêk^ûùe RMùcûj^ ÊÌ @ûkuûeòKZû aj^ Kùe û i¸aZü Gjûe ^òcðûY @iµì‰ð [ôfû û Gjûe bìaò^ýûi PZêbêðRûKéZò @ùU û"
      ]
    },
    sculpturalMasterpieces: {
      title: "@^^ý Kkû I bûÄ~ýð",
      astadikpalas: {
        title: "@Á\òM_ûk",
        content: "bûÄ~ýðcû^u c¤ùe @Á\òM_ûk @Zý« iìlà KûeêKû~ýð _ì‰ð @ùU û @Á\òM_ûku c¤ùe @MÜò I aeêYu _âZòcû ^òRe iìlà Kc^údZû _ûAñ iê_âiò¡ û",
        items: [
          ""
        ]
      },
      divineScenes: {
        title: "ù\aù\aúu _âZòcû",
        content: "_âcêL ù\aù\aúu c¤ùe ^òcÜfòLôZ _âZòcû I \égýûakú @^ýZc û",
        items: [
          "gòa_ûaðZúu aòaûj",
          "^UeûR",
          "_ûaðZú",
          "fòw_ìRû \égýûakú"
        ]
      }
    },
    references: {
      title: "ଆଧାର ଗ୍ରନ୍ଥାବଳୀ",
      items: [
        "ଡି. ମିତ୍ର, ଭୁବନେଶ୍ୱର, ASI, ନୂଆଦିଲ୍ଲୀ, ୧୯୫୮।",
        "କେ. ସି. ପାଣିଗ୍ରାହୀ, ଆର୍କିଓଲୋଜିକାଲ୍ ରିମେନ୍ସ ଆଟ୍ ଭୁବନେଶ୍ୱର, କଲିକତା, ୧୯୬୧।",
        "କେ. ଏସ୍. ବେହେରା, ଟେମ୍ପଲ୍ସ ଅଫ୍ ଓଡ଼ିଶା, ଓଡ଼ିଶା ସାହିତ୍ୟ ଏକାଡେମୀ, ଭୁବନେଶ୍ୱର, ୧୯୯୩।",
        "ଟି. ଇ. ଡୋନାଲ୍ଡସନ, ହିନ୍ଦୁ ଟେମ୍ପଲ୍ ଆର୍ଟ ଅଫ୍ ଓଡ଼ିଶା, ଭଲ୍ୟୁମ-II, ଇ. ଜେ. ବ୍ରିଲ୍, ଲାଇଡେନ୍, ୧୯୮୬।",
        "ସି. ଏଲ୍. ଫ୍ୟାବିନ୍, ହିଷ୍ଟ୍ରି ଅଫ୍ ଆର୍ଟ ଅଫ୍ ଓଡ଼ିଶା, କଲିକତା, ୧୯୭୪।"
      ]
    },
    footer: {
      text: "© {year} ରାଜାରାଣୀ ମନ୍ଦିର ଐତିହ୍ୟ ସ୍ଥଳ। ଭାରତୀୟ ପ୍ରତ୍ନତତ୍ତ୍ୱ ବିଭାଗ ଦ୍ୱାରା ସଂରକ୍ଷିତ।"
    }
  }
};

function App() {
  const [language, setLanguage] = useState<Language>('en');
  const currentContent = content[language];

  return (
    <div className={`min-h-screen bg-stone-50 ${language === 'or' ? 'font-odia' : ''}`}>
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
           <div className="mt-6" dangerouslySetInnerHTML={{ __html: currentContent.video.frame }}>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-16" >
          <h2 className="text-3xl font-bold mb-6 text-gray-800">{currentContent.gallery.title}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {currentContent.gallery.items.map((g, i) => (
              <div key={i} className="relative group">
                <img 
                  src={g.image}
                  alt={g.alt}
                  className="w-full h-80 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4 rounded-b-lg">
                  <h3 className="text-lg font-semibold">{g.title}</h3>
                  <p className="text-sm">{g.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Virtual Tour Section */}
        <div className="bg-amber-100 rounded-lg shadow-lg p-8 mb-16 text-center" >
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Explore the Temple Virtually</h2>
          <p className="text-lg text-gray-600 mb-6">Take an immersive 3D virtual tour of the magnificent Rajarani Temple from the comfort of your home.</p>
          <a 
            href="https://asimuseum.info/RAJA_RANI/RAJA%20RANI/index.htm"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
          >
            Start Virtual Tour
          </a>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-4 gap-8 mb-16" >
          <FeatureCard 
            icon={<Architecture />}
            title={currentContent.keyFeatures.architecture.title}
            description={currentContent.keyFeatures.architecture.description}
          />
          <FeatureCard 
            icon={<History />}
            title={currentContent.keyFeatures.history.title}
            description={currentContent.keyFeatures.history.description}
          />
        </div>

        {/* Architectural Details */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16" >
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
              <h3 className="text-xl font-semibold mb-4">{currentContent.architecturalComposition.detailedFeatures.pabhaga.title}</h3>
              <ul className="space-y-3 text-gray-600">
                {currentContent.architecturalComposition.detailedFeatures.pabhaga.items.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">{currentContent.architecturalComposition.detailedFeatures.superstructure.title}</h3>
              <ul className="space-y-3 text-gray-600">
                {currentContent.architecturalComposition.detailedFeatures.superstructure.items.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Jagamohana Section */}
        <div className="bg-amber-50 rounded-lg shadow-lg p-8 mb-16" >
          <h2 className="text-2xl font-bold mb-6 text-gray-800">{currentContent.jagamohana.title}</h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            {currentContent.jagamohana.content.map((paragraph, index) => (
              <p key={index} className={index === 0 ? "mb-4" : ""}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Sculptural Details */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16" >
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
        <div className="bg-stone-100 rounded-lg shadow-lg p-8 mb-16" >
          <h2 className="text-2xl font-bold mb-6 text-gray-800">{currentContent.sculpturalMasterpieces.title}</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">{currentContent.sculpturalMasterpieces.astadikpalas.title}</h3>
              <div className="prose prose-lg text-gray-600">
                <p>
                  {currentContent.sculpturalMasterpieces.astadikpalas.content}
                </p>
                <ul>
                  {currentContent.sculpturalMasterpieces.astadikpalas.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">{currentContent.sculpturalMasterpieces.divineScenes.title}</h3>
              <div className="prose prose-lg text-gray-600">
                <p>{currentContent.sculpturalMasterpieces.divineScenes.content}</p>
                <ul>
                  {currentContent.sculpturalMasterpieces.divineScenes.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Nayikas Section */}
        <div className="bg-amber-50 rounded-lg shadow-lg p-8 mb-16" >
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
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16" >
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
        <div className="grid md:grid-cols-2 gap-8 mb-16" >
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
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16" >
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-6 h-6 text-amber-600" />
            <h2 className="text-2xl font-bold text-gray-800">{currentContent.references.title}</h2>
          </div>
          <div className="prose prose-lg max-w-none text-gray-600">
            <ul className="space-y-3 list-none pl-0">
              {currentContent.references.items.map((item, index) => (
                <li key={index} className="flex gap-2">
                  <span className="text-amber-600">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8" >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm">
            {currentContent.footer.text.replace('{year}', new Date().getFullYear().toString())}
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
