import React from 'react';
import { MapPin, Clock, Camera, History, Archive as Architecture, Compass, Columns, ChevronDown, Ruler, Palette, Image, Leaf, Calendar, BookOpen } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <div 
        className="h-screen relative flex items-center justify-center"
        style={{
          backgroundImage: 'url("https://resonancemedia.co.in/wp-content/uploads/2025/02/1-Cover-Photo-scaled.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Rajarani Temple</h1>
          <p className="text-xl md:text-2xl mb-6">A Masterpiece of Odishan Architecture</p>
          <div className="flex items-center justify-center gap-2 text-lg">
            <MapPin className="w-5 h-5" />
            <span>20°15'N, 85°50'E • Bhubaneswar, Odisha</span>
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
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Historical Overview</h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-4">
              The Rajarani temple, originally known as the Indresvara Siva Temple, stands as a testament to the architectural brilliance of ancient Odisha. Located in the north-east of Lingaraja Temple, this remarkable structure represents a unique experiment in temple architecture, distinguished by its sculptural excellence and ornate design.
            </p>
            <p className="mb-4">
              The temple derives its current name "Rajarani" from the fine-grained yellowish sandstone used in its construction. This special stone, known locally as Rajarania, gives the temple its distinctive amber hue that has mellowed beautifully with time, enhancing its architectural splendor.
            </p>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Temple Gallery</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative group">
              <img 
                src="https://resonancemedia.co.in/wp-content/uploads/2025/02/2-Front-View-of-Rajarani-Temple-scaled.jpg"
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
                src="https://resonancemedia.co.in/wp-content/uploads/2025/02/3-Panels-on-the-Deul.jpg"
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
                src="https://resonancemedia.co.in/wp-content/uploads/2025/02/4-Nayika.jpg"
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
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Architectural Composition</h2>
          
          {/* Structure Overview */}
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Primary Structure</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center gap-3">
                  <Compass className="w-5 h-5 text-amber-600 flex-shrink-0" />
                  <span>Eastern Orientation</span>
                </li>
                <li className="flex items-center gap-3">
                  <Architecture className="w-5 h-5 text-amber-600 flex-shrink-0" />
                  <span>Sanctum (Deul) Height: 17.9 meters</span>
                </li>
                <li className="flex items-center gap-3">
                  <Columns className="w-5 h-5 text-amber-600 flex-shrink-0" />
                  <span>Pancharatha Plan with Curvilinear Superstructure</span>
                </li>
                <li className="flex items-center gap-3">
                  <Ruler className="w-5 h-5 text-amber-600 flex-shrink-0" />
                  <span>Three-Moulded Platform Base</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Panchanga Bada (Five Divisions)</h3>
              <ul className="space-y-3 text-gray-600">
                <li>1. Pabhaga (Base)</li>
                <li>2. Talajangha (Lower Wall)</li>
                <li>3. Bandhana (Binding)</li>
                <li>4. Uparajangha (Upper Wall)</li>
                <li>5. Baranda (Top Section)</li>
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
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Sculptural Heritage</h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-4">
              The temple is renowned for its rich sculptural wealth, featuring several notable elements:
            </p>
            <ul className="space-y-3">
              <li>• Naga-nagi stambha (Serpent Pillars)</li>
              <li>• Saiva dwarapalas (Door Guardians) on entrance jambs</li>
              <li>• Lakulisa sculpture on the entrance lintel</li>
              <li>• Navagrahas (Nine Planets) on the architrave above the entrance</li>
            </ul>
            <p className="mt-4">
              The presence of Lakulisa and Saiva dwarapalas provides strong evidence of the temple's Saivite affiliation, marking it as a significant center of Shaivism in ancient Odisha.
            </p>
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
          <h2 className="text-2xl font-bold mb-6 text-gray-800">The Nayikas</h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-4">
              The temple's celebrity status is largely attributed to its tall, slender, and sophisticated nayikas adorning the sanctum walls, particularly on the anurahapagas of the upara-jangha. These figures are carved in bold relief, depicting various scenes of daily life and emotional states:
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Daily Activities</h4>
                <ul>
                  <li>Attending to toilet</li>
                  <li>Looking into mirror</li>
                  <li>Taking off anklet</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Interactions</h4>
                <ul>
                  <li>Fondling her child</li>
                  <li>Caressing pet bird</li>
                  <li>Playing instruments</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Expressions</h4>
                <ul>
                  <li>Turning from ascetic</li>
                  <li>Holding tree branch</li>
                  <li>Various emotional states</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Decorative Artistry</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Erotic Sculptures</h3>
              <div className="prose prose-lg text-gray-600">
                <p>
                  The upara-jangha features notable erotic (mithuna) figures carved in high relief on its projecting pagas. These are complemented by other decorative motifs including:
                </p>
                <ul>
                  <li>Vyala (mythical creatures)</li>
                  <li>Jagrata (vigilant figures)</li>
                  <li>Gajakranta (elephant motifs)</li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Floral Motifs</h3>
              <div className="prose prose-lg text-gray-600">
                <p>
                  The temple's walls are adorned with intricate scroll motifs featuring:
                </p>
                <ul>
                  <li>Lush foliages</li>
                  <li>Detailed creepers</li>
                  <li>Vanalata (forest vines)</li>
                </ul>
                <p>
                  Each design contains independent foliage patterns, creating a unique artistic expression.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dating and Garden */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-stone-100 rounded-lg shadow-lg p-8">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-6 h-6 text-amber-600" />
              <h2 className="text-2xl font-bold text-gray-800">Historical Dating</h2>
            </div>
            <p className="text-gray-600">
              Based on its sculptural art and architectural style, scholars have dated this temple to approximately the mid-11th century AD, marking a significant period in Odishan temple architecture.
            </p>
          </div>
          <div className="bg-stone-100 rounded-lg shadow-lg p-8">
            <div className="flex items-center gap-3 mb-4">
              <Leaf className="w-6 h-6 text-amber-600" />
              <h2 className="text-2xl font-bold text-gray-800">Garden Complex</h2>
            </div>
            <p className="text-gray-600">
              As part of its beautification programme, a stunning garden complex with thoughtful landscaping has been developed around the monument, enhancing its natural beauty and providing a serene environment for visitors.
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