import React from 'react';
import { Github, Linkedin, Mail, User, Code, Briefcase, GraduationCap } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Gabriel Alves</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">Desenvolvedor front-end</p>
          <div className="flex justify-center gap-4">
            <a href="#" className="p-2 hover:text-blue-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="p-2 hover:text-blue-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="p-2 hover:text-blue-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80"
                alt="Workspace"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                <User className="text-blue-600" />
                Sobre Mim
              </h2>
              <p className="text-gray-600 mb-4">
                Sou um desenvolvedor apaixonado por criar soluções inovadoras e eficientes.
                Com experiência em desenvolvimento web full stack, busco sempre aprender
                novas tecnologias e aprimorar minhas habilidades.
              </p>
              <p className="text-gray-600">
                Meu objetivo é desenvolver aplicações que não apenas funcionem perfeitamente,
                mas também proporcionem uma excelente experiência ao usuário.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-2">
            <Code className="text-blue-600" />
            Habilidades
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Frontend', 'Backend', 'Ferramentas'].map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">{category}</h3>
                <ul className="space-y-2">
                  {[1, 2, 3, 4].map((_, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${Math.random() * 40 + 60}%` }}></div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-2">
            <Briefcase className="text-blue-600" />
            Projetos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={`https://images.unsplash.com/photo-151${index}8481253-65db11144585?auto=format&fit=crop&q=80`}
                  alt={`Project ${index + 1}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Projeto {index + 1}</h3>
                  <p className="text-gray-600 mb-4">
                    Descrição breve do projeto e tecnologias utilizadas.
                  </p>
                  <a
                    href="#"
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                  >
                    Ver Projeto
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-2">
            <GraduationCap className="text-blue-600" />
            Educação
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {[1, 2].map((_, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">Curso {index + 1}</h3>
                <p className="text-gray-600 mb-2">Instituição de Ensino</p>
                <p className="text-gray-500">2020 - 2024</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">Gabriel Alves © 2024</p>
          <div className="flex justify-center gap-4">
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;