/* Team Page */
"use client";

import { motion } from "framer-motion";

export default function TeamPage() {
  return (
    <main className="min-h-screen text-white px-6 py-20">
      <div className="max-w-5xl mx-auto">

        {/* Title */}
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          About <span className="text-red-600">Our</span> Team{" "}
        </motion.h1>

        <section className="relative mb-20 px-4">
          <div className="absolute inset-0 blur-3xl opacity-20 bg-red-400 rounded-3xl -z-10"></div>

          <div className="max-w-3xl mx-auto bg-black/40 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-xl">
        
            {/* Logo */}
            <div className="w-40 h-40 mx-auto mb-4">
              <img src={"/images/team/marketing.png"} alt={"Marketing & Communications"} className="w-full h-full object-contain" />
            </div>

            {/* Description */}
            <p className="text-gray-300 leading-relaxed whitespace-pre-line text-justify">
              Η ομάδα Marketing & Communications δίνει φωνή στο event, φροντίζοντας το
              μήνυμά του να φτάσει στο κοινό με δημιουργικό και αποτελεσματικό τρόπο.
              Διαχειρίζεται τα social media, το website, το app και άλλες ψηφιακές πλατφόρμες,
              συνεργάζεται με τα μέσα ενημέρωσης και τους συνεργάτες, δημιουργεί περιεχόμενο και 
              προωθεί το event, εξασφαλίζοντας μια ολοκληρωμένη και σύγχρονη ψηφιακή εμπειρία 
              για το κοινό.
            </p>
          </div>
        </section>

        <section className="relative mb-20 px-4">
          <div className="absolute inset-0 blur-3xl opacity-20 bg-green-400 rounded-3xl -z-10"></div>

          <div className="max-w-3xl mx-auto bg-black/40 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-xl">
        
            {/* Logo */}
            <div className="w-40 h-40 mx-auto mb-4">
              <img src={"/images/team/graphics.png"} alt={"Graphics & Design"} className="w-full h-full object-contain" />
            </div>

            {/* Description */}
            <p className="text-gray-300 leading-relaxed whitespace-pre-line text-justify">
              Η ομάδα Graphics & Design δημιουργεί την οπτική ταυτότητα του event, από λογότυπα 
              και αφίσες μέχρι multimedia και άλλα γραφιστικά στοιχεία. Συνεργάζεται στενά με όλες 
              τις ομάδες, εξασφαλίζοντας ότι το οπτικό υλικό υποστηρίζει και ενισχύει την εμπειρία 
              του event, μεταφέροντας με συνέπεια το μήνυμα και την αισθητική του.
            </p>
          </div>
        </section>

        <section className="relative mb-20 px-4">
          <div className="absolute inset-0 blur-3xl opacity-20 bg-cyan-400 rounded-3xl -z-10"></div>

          <div className="max-w-3xl mx-auto bg-black/40 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-xl">
        
            {/* Logo */}
            <div className="w-40 h-40 mx-auto mb-4">
              <img src={"/images/team/speakers.png"} alt={"Speakers"} className="w-full h-full object-contain" />
            </div>

            {/* Description */}
            <p className="text-gray-300 leading-relaxed whitespace-pre-line text-justify">
              Η ομάδα των Speakers αναλαμβάνει να μετατρέψει κάθε ιδέα σε μία δυνατή, σαφή
              και εμπνευσμένη ομιλία. Επιλέγει τα θέματα και εντοπίζει τους κατάλληλους
              ομιλητές, τους καθοδηγεί στη συγγραφή και διαμόρφωση της ομιλίας τους, ενώ
              παράλληλα εργάζεται για τη βελτίωση της σκηνικής τους παρουσίας και της
              επικοινωνίας με το κοινό. Μέσα από καθοδήγηση, συμβουλές και πρακτική
              υποστήριξη, η ομάδα εξασφαλίζει ότι κάθε ομιλητής μπορεί να εκφραστεί με
              αυτοπεποίθηση και να μεταδώσει ιδέες που αλλάζουν τα πάντα.
            </p>
          </div>
        </section>

        <section className="relative mb-20 px-4">
          <div className="absolute inset-0 blur-3xl opacity-20 bg-purple-400 rounded-3xl -z-10"></div>

          <div className="max-w-3xl mx-auto bg-black/40 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-xl">
        
            {/* Logo */}
            <div className="w-40 h-40 mx-auto mb-4">
              <img src={"/images/team/sponsors.png"} alt={"Sponsorships & Finance"} className="w-full h-full object-contain" />
            </div>

            {/* Description */}
            <p className="text-gray-300 leading-relaxed whitespace-pre-line text-justify">
              Η ομάδα Sponsorships & Finance αναλαμβάνει την οικονομική υποστήριξη του event, 
              εξασφαλίζοντας χορηγίες και πόρους για την υλοποίησή του. Διαχειρίζεται τον προϋπολογισμό 
              και τους οικονομικούς πόρους με στρατηγικό τρόπο και αναπτύσσει συνεργασίες με 
              χρηματοοικονομικούς και προϊοντικούς συνεργάτες, εξασφαλίζοντας ότι κάθε πτυχή του 
              event υποστηρίζεται με βιώσιμο και αποτελεσματικό τρόπο.
            </p>
          </div>
        </section>

        <section className="relative mb-20 px-4">
          <div className="absolute inset-0 blur-3xl opacity-20 bg-yellow-400 rounded-3xl -z-10"></div>

          <div className="max-w-3xl mx-auto bg-black/40 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-xl">
        
            {/* Logo */}
            <div className="w-40 h-40 mx-auto mb-4">
              <img src={"/images/team/experience.png"} alt={"Experience"} className="w-full h-full object-contain" />
            </div>

            {/* Description */}
            <p className="text-gray-300 leading-relaxed whitespace-pre-line text-justify">
              Η ομάδα Experience δημιουργεί την ατμόσφαιρα και την εμπειρία του event από την
              αρχή ως το τέλος. Επιλέγει τους χώρους με τρόπο που να εξασφαλίζει άνεση και
              προσβασιμότητα για όλους, σχεδιάζει τα performances, τις δραστηριότητες και τα
              workshops, και φροντίζει κάθε λεπτομέρεια που κάνει την εμπειρία μοναδική.
              Επιπλέον, αναλαμβάνει την τεχνική υποστήριξη onsite, όπως φωτισμό, ήχο και
              εικόνα, διασφαλίζοντας ότι η εκδήλωση κυλάει ομαλά και με επαγγελματικό επίπεδο.
            </p>
          </div>
        </section>
        
      </div>
    </main>
  );
}
