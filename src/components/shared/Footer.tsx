import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import logo from "../../assets/assuflex.svg"


export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
          <a href="/home" className="flex items-center group">
          <img src={logo} alt="" style={{ height:"120px" }} />
          </a>
            <p className="text-gray-400 mb-6">
              Votre courtier en assurance santé, spécialiste des solutions personnalisées pour particuliers et
              professionnels.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-pink-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-700 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Nos offres</h3>
            <ul className="space-y-3">
              <li>
                <a className="text-gray-400 hover:text-white transition-colors">
                  Pack Jeune actif / Étudiant
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white transition-colors">
                  Pack Famille
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white transition-colors">
                  Pack Senior / Retraité
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white transition-colors">
                  Pack Travailleur Indépendant
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white transition-colors">
                  Pack Entreprise / TPE
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Informations</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  À propos de nous
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Actualite
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">
                123 Avenue de la Santé
                <br />
                75000 Paris
              </li>
              <li className="text-gray-400">Téléphone: 01 23 45 67 89</li>
              <li className="text-gray-400">Email: contact@assuflex.fr</li>
              <li>
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                  Nous contacter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500 text-sm">
          <p className="mb-4">&copy; {new Date().getFullYear()} ASSUFLEX - Tous droits réservés</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="hover:text-white transition-colors">
              Mentions légales
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
