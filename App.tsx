import React, { useState } from 'react';
import { Leaf, Package, Rocket, Truck, QrCode, Building2, Users, GraduationCap, Building, CheckSquare, PackageOpen, Languages, Mail, Clock, Box, Store, AlertCircle, MousePointer, Users2, ArrowRight, ShoppingBag, Palette, Globe2, Gift, UserPlus, Award, HeartHandshake, UsersRound, Briefcase, Building2Icon, MessagesSquare } from 'lucide-react';

type Language = 'fr' | 'en';

function App() {
  const [language, setLanguage] = useState<Language>('fr');
  const [activeTab, setActiveTab] = useState<string>('');

  const content = {
    fr: {
      title: 'Boostez votre marque avec un merchandising digital et écoresponsable.',
      keyPoints: [
        'Simplifiez la gestion de vos goodies grâce à un portail exclusif conçu pour vos équipes, partenaires et fans',
        'Optimisez toutes vos opérations de merchandising : sourcing, stockage et distribution, le tout depuis une seule plateforme',
        'Choisissez des produits écoresponsables avec un reporting transparent de leur empreinte carbone'
      ],
      testimonial: 'Avant Intergoodies, nous perdions un temps précieux à chercher des produits tendance et de qualité, à gérer manuellement le merchandising et à utiliser nos bureaux comme entrepôts. Nous n\'avions aucune visibilité sur nos stocks, et la distribution partout en Europe était un véritable casse-tête. Avec Intergoodies, tout est simplifié : je peux enfin me concentrer sur mon activité principale en toute sérénité !',
      whyChoose: 'Pourquoi choisir InterGoodies ?',
      benefits: {
        speed: {
          title: 'Rapidité',
          desc: 'Votre boutique personnalisée et vos premières maquettes prêtes en moins de 24 heures'
        },
        simplicity: {
          title: 'Simplicité',
          desc: 'Une solution tout-en-un pour gérer tous vos goodies, du sourcing à leur livraison, sans effort'
        },
        sustainability: {
          title: 'Durabilité',
          desc: 'Des produits écoresponsables avec un bilan carbone pour chaque commande'
        }
      },
      features: {
        simplify: {
          title: 'Simplifiez votre merchandising',
          points: [
            'Accédez à un catalogue varié de goodies exclusifs et écoresponsables, en quelques clics',
            'Vos designs personnalisés et votre boutique configurée sous 24 heures',
            'Nous nous occupons de tout : création originale, fabrication chez nos partenaires, entreprosage et expédition',
            'Livrez directement à domicile, au bureau ou en point relais partout en Europe'
          ]
        },
        warehouse: {
          title: 'Votre entrepôt digital personnalisé',
          points: [
            'Surveillez vos stocks en temps réel',
            'Recevez des alertes en cas de faible stock',
            'Re-commandez vos produits personnalisés en 1-clic',
            'Expédiez vos produits à tout moment vers des salons professionnels, des bureaux ou chez des particuliers'
          ]
        },
        store: {
          title: 'Une boutique en ligne adaptée à votre entreprise',
          points: [
            'Offrez à vos collaborateurs et clients la liberté de choisir et commander leurs goodies en toute simplicité',
            'Créez votre espace digital avec une conception originale, rapidement',
            'Centralisez la gestion et simplifiez la distribution grâce à une seule plateforme dediée'
          ]
        }
      },
      useCases: {
        title: 'Cas d\'usage',
        cases: [
          {
            title: 'RH - Kits d\'intégration des employés',
            desc: 'Accueillez les nouveaux employés avec des kits d\'intégration personnalisés qui peuvent être expédiés directement à leur domicile ou à leur bureau en 1-clic',
            icon: UserPlus,
            color: 'bg-[#9B93FF]'
          },
          {
            title: 'Marketing - Événements d\'entreprise',
            desc: 'Simplifiez la distribution de produits dérivés et expédier les articles directement sur vos salons professionnels quelques jours avant l\'évènement',
            icon: Award,
            color: 'bg-[#F0FF1E]'
          },
          {
            title: 'Commercial - Cadeaux clients',
            desc: 'Renforcez vos relations avec vos clients en leur envoyant vos produits de marque avec un minimum d\'effort grâce à votre e-shop d\'entreprise',
            icon: HeartHandshake,
            color: 'bg-[#FA9F76]'
          },
          {
            title: 'Communication - Image de marque',
            desc: 'Valorisez votre entreprise avec des goodies personnalisés exclusifs commandables en ligne et expediatble partout',
            icon: UsersRound,
            color: 'bg-[#9AD4E1]'
          }
        ]
      },
      faq: {
        title: 'Questions fréquentes',
        questions: [
          {
            q: 'Qu\'est-ce qu\'Intergoodies ?',
            a: 'Intergoodies est une plateforme numérique innovante permettant aux entreprises de créer une boutique en ligne personnalisée pour leurs produits de marque. Elle simplifie l\'approvisionnement, le stockage et la distribution tout en proposant des articles écoresponsables et tendance.'
          },
          {
            q: 'À qui s\'adresse Intergoodies ?',
            a: 'Intergoodies s\'adresse à toutes les organisations, des PME aux grandes entreprises en passant par les associations. Notre solution s\'adapte à vos besoins spécifiques, que vous soyez une startup en pleine croissance, une entreprise établie cherchant à optimiser sa gestion de merchandising, ou une association souhaitant professionnaliser sa distribution de goodies.'
          },
          {
            q: 'En combien de temps ma boutique peut-elle être configurée ?',
            a: 'Votre boutique et les maquettes initiales de produits peuvent être prêtes en 24 heures.'
          },
          {
            q: 'Proposez-vous des produits écoresponsables ?',
            a: 'Oui, notre catalogue inclut des produits écoresponsables fabriqués en France ou en Europe, avec un suivi transparent de l\'empreinte carbone pour chaque commande.'
          },
          {
            q: 'Les employés et partenaires peuvent-ils commander directement depuis le portail ?',
            a: 'Oui, vos équipes, partenaires et fans peuvent accéder au portail pour commander leurs goodies personnalisés directement. Vous pouvez contrôler les accès.'
          },
          {
            q: 'Quels types de produits sont disponibles ?',
            a: 'Notre catalogue propose une large gamme d\'articles tels que des vêtements, des articles pour boissons, des fournitures de bureau, des gadgets technologiques et bien plus encore, tous personnalisables.'
          },
          {
            q: 'Gérez-vous le stockage et la logistique ?',
            a: 'Nous prenons en charge le stockage des stocks et proposons des options d\'expédition flexibles, y compris la livraison à domicile, au bureau ou en points relais.'
          },
          {
            q: 'Comment gérez-vous les stocks inutilisés ?',
            a: 'Nous avons des partenariats pour vous aider à recycler les stocks inutilisés.'
          },
          {
            q: 'Puis-je suivre mes stocks en temps réel ?',
            a: 'Oui, notre plateforme offre un suivi des stocks en temps réel ainsi que des notifications en cas de faible stock pour éviter toute rupture.'
          },
          {
            q: 'Dans quelles régions livrez-vous ?',
            a: 'Nous livrons dans toute l\'Europe et proposons des options d\'expédition mondiale sur demande.'
          },
          {
            q: 'Comment démarrer avec Intergoodies ?',
            a: 'Contactez-nous simplement pour discuter de vos besoins, et nous vous guiderons étape par étape dans le processus de configuration.'
          }
        ]
      },
      contact: 'Contactez-nous',
      startProject: 'Démarrer votre projet'
    },
    en: {
      title: 'Boost your brand with digital and eco-responsible merchandising.',
      keyPoints: [
        'Simplify your goodies management with an exclusive portal designed for your teams, partners and fans',
        'Optimize all your merchandising operations: sourcing, storage and distribution, all from a single platform',
        'Choose eco-responsible products with transparent carbon footprint reporting'
      ],
      testimonial: 'Before Intergoodies, we were wasting precious time searching for trendy, quality products, manually managing merchandising, and using our offices as warehouses. We had no visibility on our stock, and distribution across Europe was a real headache. With Intergoodies, everything is simplified: I can finally focus on my core business with peace of mind!',
      whyChoose: 'Why choose InterGoodies?',
      benefits: {
        speed: {
          title: 'Speed',
          desc: 'Your personalized store and first mockups ready in less than 24 hours'
        },
        simplicity: {
          title: 'Simplicity',
          desc: 'An all-in-one solution to manage all your goodies, from sourcing to delivery, effortlessly'
        },
        sustainability: {
          title: 'Sustainability',
          desc: 'Eco-responsible products with a carbon footprint for each order'
        }
      },
      features: {
        simplify: {
          title: 'Simplify your merchandising',
          points: [
            'Access a varied catalog of exclusive and eco-responsible goodies in just a few clicks',
            'Your personalized designs and store set up within 24 hours',
            'We handle everything: original creation, manufacturing with our partners, warehousing and shipping',
            'Deliver directly to home, office or pickup points throughout Europe'
          ]
        },
        warehouse: {
          title: 'Your personalized digital warehouse',
          points: [
            'Monitor your stock in real-time',
            'Receive alerts for low stock',
            'Reorder your customized products in 1-click',
            'Ship your products anytime to trade shows, offices or individuals'
          ]
        },
        store: {
          title: 'An online store adapted to your company',
          points: [
            'Give your employees and customers the freedom to choose and order their goodies with ease',
            'Create your digital space with original design, quickly',
            'Centralize management and simplify distribution through a single dedicated platform'
          ]
        }
      },
      useCases: {
        title: 'Use Cases',
        cases: [
          {
            title: 'HR - Employee Onboarding Kits',
            desc: 'Welcome new employees with personalized onboarding kits that can be shipped directly to their home or office in 1-click',
            icon: UserPlus,
            color: 'bg-[#9B93FF]'
          },
          {
            title: 'Marketing - Corporate Events',
            desc: 'Simplify merchandise distribution and ship items directly to your trade shows a few days before the event',
            icon: Award,
            color: 'bg-[#F0FF1E]'
          },
          {
            title: 'Sales - Client Gifts',
            desc: 'Strengthen your client relationships by sending them branded products with minimal effort thanks to your company e-shop',
            icon: HeartHandshake,
            color: 'bg-[#FA9F76]'
          },
          {
            title: 'Communication - Brand Image',
            desc: 'Enhance your company with exclusive customized goodies that can be ordered online and shipped anywhere',
            icon: UsersRound,
            color: 'bg-[#9AD4E1]'
          }
        ]
      },
      faq: {
        title: 'Frequently Asked Questions',
        questions: [
          {
            q: 'What is Intergoodies?',
            a: 'Intergoodies is an innovative digital platform that allows companies to create a customized online store for their branded products. It simplifies sourcing, storage, and distribution while offering eco-responsible and trendy items.'
          },
          {
            q: 'Who is Intergoodies for?',
            a: 'Intergoodies caters to all organizations, from SMEs to large companies and associations. Our solution adapts to your specific needs, whether you\'re a growing startup, an established company looking to optimize merchandising management, or an association wanting to professionalize goodies distribution.'
          },
          {
            q: 'How quickly can my store be set up?',
            a: 'Your store and initial product mockups can be ready within 24 hours.'
          },
          {
            q: 'Do you offer eco-responsible products?',
            a: 'Yes, our catalog includes eco-responsible products made in France or Europe, with transparent carbon footprint tracking for each order.'
          },
          {
            q: 'Can employees and partners order directly from the portal?',
            a: 'Yes, your teams, partners, and fans can access the portal to order their customized goodies directly. You can control access.'
          },
          {
            q: 'What types of products are available?',
            a: 'Our catalog offers a wide range of items such as clothing, beverage items, office supplies, tech gadgets, and much more, all customizable.'
          },
          {
            q: 'Do you handle storage and logistics?',
            a: 'We handle stock storage and offer flexible shipping options, including home delivery, office delivery, or pickup points.'
          },
          {
            q: 'How do you handle unused stock?',
            a: 'We have partnerships to help you recycle unused stock.'
          },
          {
            q: 'Can I track my inventory in real-time?',
            a: 'Yes, our platform offers real-time inventory tracking and low stock notifications to prevent stockouts.'
          },
          {
            q: 'Which regions do you deliver to?',
            a: 'We deliver throughout Europe and offer worldwide shipping options upon request.'
          },
          {
            q: 'How do I get started with Intergoodies?',
            a: 'Simply contact us to discuss your needs, and we will guide you step by step through the setup process.'
          }
        ]
      },
      contact: 'Contact us',
      startProject: 'Start your project'
    }
  };

  const handleContactClick = () => {
    window.location.href = 'mailto:contact@intergoodies.com';
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-[#F6F5F4]">
      {/* Header */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 bg-[#9B93FF] rounded-full"></div>
              <div className="absolute inset-2 bg-white rounded-full"></div>
              <div className="absolute inset-3 bg-[#9B93FF] rounded-full flex items-center justify-center text-white font-bold text-lg">
                IG
              </div>
            </div>
            <span className="text-2xl sm:text-3xl font-bold text-[#9B93FF]">
              InterGoodies
            </span>
          </div>
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2">
              <Languages className="w-5 h-5" />
              <select 
                value={language}
                onChange={(e) => setLanguage(e.target.value as Language)}
                className="bg-transparent border-none cursor-pointer focus:outline-none text-sm sm:text-base"
              >
                <option value="fr">Français</option>
                <option value="en">English</option>
              </select>
            </div>
            <button
              onClick={handleContactClick}
              className="flex items-center gap-2 bg-[#FA9F76] text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg hover:bg-[#FA9F76]/90 transition-colors text-sm sm:text-base"
            >
              <Mail className="w-4 h-4" />
              {t.contact}
            </button>
          </div>
        </div>
        
        <div className="mt-8 sm:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight text-[#001C26] mb-6 sm:mb-8">
              {t.title}
            </h1>
            <ul className="space-y-4">
              {t.keyPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <CheckSquare className="w-5 h-5 text-[#9B93FF]" />
                  </div>
                  <p className="text-base sm:text-lg text-gray-600">{point}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-[300px] sm:h-[400px] rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80" 
              alt="Modern merchandising"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </header>

      {/* Testimonial Section */}
      <section className="bg-gradient-to-r from-[#9B93FF] to-[#4AAEC3] py-12 sm:py-16 my-12 sm:my-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-white text-lg sm:text-xl leading-relaxed italic text-center">
              "{t.testimonial}"
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Features */}
        <section className="mb-16 sm:mb-20 space-y-16 sm:space-y-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-6">{t.features.simplify.title}</h2>
              <ul className="space-y-4">
                {t.features.simplify.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    {index === 0 && <ShoppingBag className="w-5 h-5 text-[#9B93FF] mt-1 flex-shrink-0" />}
                    {index === 1 && <Palette className="w-5 h-5 text-[#9B93FF] mt-1 flex-shrink-0" />}
                    {index === 2 && <Package className="w-5 h-5 text-[#9B93FF] mt-1 flex-shrink-0" />}
                    {index === 3 && <Globe2 className="w-5 h-5 text-[#9B93FF] mt-1 flex-shrink-0" />}
                    <p className="text-sm sm:text-base text-gray-600">{point}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[250px] sm:h-[300px] rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1527719327859-c6ce80353573?auto=format&fit=crop&w=800&q=80"
                alt="Simplified merchandising"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-[250px] sm:h-[300px] rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80"
                alt="Digital warehouse"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-xl sm:text-2xl font-bold mb-6">{t.features.warehouse.title}</h2>
              <ul className="space-y-4">
                {t.features.warehouse.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    {index === 0 && <Box className="w-5 h-5 text-[#9B93FF] mt-1 flex-shrink-0" />}
                    {index === 1 && <AlertCircle className="w-5 h-5 text-[#9B93FF] mt-1 flex-shrink-0" />}
                    {index === 2 && <MousePointer className="w-5 h-5 text-[#9B93FF] mt-1 flex-shrink-0" />}
                    {index === 3 && <Truck className="w-5 h-5 text-[#9B93FF] mt-1 flex-shrink-0" />}
                    <p className="text-sm sm:text-base text-gray-600">{point}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-6">{t.features.store.title}</h2>
              <ul className="space-y-4">
                {t.features.store.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    {index === 0 && <Users2 className="w-5 h-5 text-[#9B93FF] mt-1 flex-shrink-0" />}
                    {index === 1 && <Palette className="w-5 h-5 text-[#9B93FF] mt-1 flex-shrink-0" />}
                    {index === 2 && <Store className="w-5 h-5 text-[#9B93FF] mt-1 flex-shrink-0" />}
                    <p className="text-sm sm:text-base text-gray-600">{point}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[250px] sm:h-[300px] rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=800&q=80"
                alt="Online store"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16 sm:mb-20">
          <h2 className="text-xl sm:text-2xl font-bold mb-8 sm:mb-12 text-center">{t.whyChoose}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-gradient-to-br from-white to-[#9B93FF]/5 p-6 sm:p-8 rounded-2xl">
              <Rocket className="w-8 h-8 sm:w-10 sm:h-10 text-[#9B93FF] mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-3">{t.benefits.speed.title}</h3>
              <p className="text-sm sm:text-base text-gray-600">{t.benefits.speed.desc}</p>
            </div>
            <div className="bg-gradient-to-br from-white to-[#F0FF1E]/5 p-6 sm:p-8 rounded-2xl">
              <Package className="w-8 h-8 sm:w-10 sm:h-10 text-[#F0FF1E] mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-3">{t.benefits.simplicity.title}</h3>
              <p className="text-sm sm:text-base text-gray-600">{t.benefits.simplicity.desc}</p>
            </div>
            <div className="bg-gradient-to-br from-white to-[#FA9F76]/5 p-6 sm:p-8 rounded-2xl">
              <Leaf className="w-8 h-8 sm:w-10 sm:h-10 text-[#FA9F76] mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-3">{t.benefits.sustainability.title}</h3>
              <p className="text-sm sm:text-base text-gray-600">{t.benefits.sustainability.desc}</p>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-16 sm:mb-20">
          <h2 className="text-xl sm:text-2xl font-bold mb-8 sm:mb-12 text-center">{t.useCases.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {t.useCases.cases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <div key={index} className={`${useCase.color} p-6 sm:p-8 rounded-2xl`}>
                  <Icon className="w-8 h-8 sm:w-10 sm:h-10 mb-4 text-black" />
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 text-black">{useCase.title}</h3>
                  <p className="text-sm sm:text-base leading-relaxed text-black">{useCase.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16 sm:mb-20">
          <h2 className="text-xl sm:text-2xl font-bold mb-8 sm:mb-12 text-center">{t.faq.title}</h2>
          <div className="space-y-4 sm:space-y-6">
            {t.faq.questions.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4 sm:pb-6">
                <button
                  className="w-full text-left"
                  onClick={() => setActiveTab(activeTab === `faq-${index}` ? '' : `faq-${index}`)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-base sm:text-lg font-semibold">{faq.q}</h3>
                    <ArrowRight className={`w-5 h-5 transform transition-transform ${activeTab === `faq-${index}` ? 'rotate-90' : ''}`} />
                  </div>
                </button>
                {activeTab === `faq-${index}` && (
                  <p className="mt-4 text-sm sm:text-base text-gray-600">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center py-12 sm:py-16 bg-gradient-to-r from-[#9B93FF] to-[#4AAEC3] rounded-3xl px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">{t.startProject}</h2>
          <button
            onClick={handleContactClick}
            className="inline-flex items-center gap-2 bg-[#FA9F76] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-[#FA9F76]/90 transition-colors"
          >
            {t.contact}
            <ArrowRight className="w-5 h-5" />
          </button>
        </section>
      </main>
    </div>
  );
}

export default App;