
import React, { useState } from 'react';
import { SERVICES, SALON_INFO } from '../constants';
import { BookingData } from '../types';

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState<Partial<BookingData>>({
    serviceId: SERVICES[0].id,
    date: '',
    time: '',
    name: '',
    email: '',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto py-20 px-4 text-center">
        <div className="bg-white p-12 rounded-3xl shadow-2xl border border-stone-100">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600 text-4xl">
            ✓
          </div>
          <h2 className="text-3xl mb-4">Reservation Confirmed!</h2>
          <p className="text-stone-500 mb-8">
            Thank you, {formData.name}. We've received your request for {SERVICES.find(s => s.id === formData.serviceId)?.name}.
            We look forward to seeing you at our SR1 location!
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="bg-[#161b33] text-[#c5a059] px-8 py-3 rounded-full hover:bg-stone-800"
          >
            Make Another Booking
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="py-20 bg-stone-100 min-h-[80vh]">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-5">
          <div className="md:col-span-2 bg-[#161b33] p-10 text-stone-50">
            <h2 className="text-3xl mb-6 serif text-[#c5a059]">Book Your Visit</h2>
            <p className="text-stone-400 mb-10 font-light">
              Experience the best braiding and hair care in Sunderland.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#c5a059]/20 rounded-lg flex items-center justify-center text-[#c5a059]">📍</div>
                <div>
                  <h4 className="font-semibold">Salon Address</h4>
                  <p className="text-sm text-stone-500">{SALON_INFO.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#c5a059]/20 rounded-lg flex items-center justify-center text-[#c5a059]">📞</div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-sm text-stone-500">{SALON_INFO.phone}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-3 p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Select Service</label>
                  <select 
                    required
                    value={formData.serviceId}
                    onChange={e => setFormData({...formData, serviceId: e.target.value})}
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#c5a059]/50"
                  >
                    {SERVICES.map(s => (
                      <option key={s.id} value={s.id}>{s.name} - £{s.basePrice}+</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1">Date</label>
                    <input 
                      type="date" 
                      required
                      value={formData.date}
                      onChange={e => setFormData({...formData, date: e.target.value})}
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#c5a059]/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1">Time</label>
                    <input 
                      type="time" 
                      required
                      value={formData.time}
                      onChange={e => setFormData({...formData, time: e.target.value})}
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#c5a059]/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    placeholder="Enter your name"
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#c5a059]/50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    required
                    placeholder="Contact number"
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#c5a059]/50"
                  />
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-[#c5a059] text-[#161b33] font-bold py-4 rounded-xl hover:bg-[#b08d4a] transition-colors shadow-lg shadow-[#c5a059]/20 uppercase tracking-widest"
              >
                REQUEST BOOKING
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
