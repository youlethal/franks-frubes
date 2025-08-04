import { motion } from 'framer-motion';
import { BrandingConfig } from '../../config';
import Navbar from '../ui/Navbar';


import BookingModule from '../modules/BookingModule';
import GalleryModule from '../modules/GalleryModule';





interface TemplateLayoutProps {
  branding: BrandingConfig;
  modules: string[];
  darkMode?: boolean;
}

export default function TemplateLayout({ branding, modules, darkMode = false }: TemplateLayoutProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="bg-white dark:bg-gray-900"
      >
        {/* Navigation */}
        <Navbar branding={branding} />

        {/* Main Content */}
        <main>
          {modules.includes('booking') && <BookingModule branding={branding} />}
          {modules.includes('gallery') && <GalleryModule branding={branding} />}
        </main>

        {/* Footer */}
      </motion.div>
    </div>
  );
} 