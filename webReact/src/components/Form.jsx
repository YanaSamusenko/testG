import React, { useState } from 'react';
import { Button } from './Button';
import '../styles/form.scss'


export function InterviewForm () {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    position: '',
    employmentType: '',
    questions: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь можно добавить логику для отправки данных формы
    console.log('Форма отправлена:', formData);
    // Сброс формы после отправки
    setFormData({
      name: '',
      phone: '',
      email: '',
      position: '',
      employmentType: '',
      questions: '',
    });
  };

  return (
<section className="interview-form">
   <div className="container">
     <div className="interview-form-container">
       <h2>Запись на собеседование</h2>
       <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            placeholder="Как к вам обращаться?"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Телефон"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            id="position"
            name="position"
            placeholder="Желаемая должность"
            value={formData.position}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Категория занятости:</label>
          <div className="employment-options">
            <label>
              <input
                type="radio"
                name="employmentType"
                value="office"
                checked={formData.employmentType === 'office'}
                onChange={handleChange}
                required
              />
              Работа в офисе
            </label>
            <label>
              <input
                type="radio"
                name="employmentType"
                value="internship"
                checked={formData.employmentType === 'internship'}
                onChange={handleChange}
                required
              />
              Стажировка
            </label>
            <label>
              <input
                type="radio"
                name="employmentType"
                value="remote"
                checked={formData.employmentType === 'remote'}
                onChange={handleChange}
                required
              />
              Удаленная работа
            </label>
          </div>
        </div>
        <div className="form-group">
          <textarea
            id="questions"
            name="questions"
            placeholder="Ваши вопросы"
            value={formData.questions}
            onChange={handleChange}
            rows="4"
          />
        </div>
         {Button({ type: 'submit', name: 'move-interview', children: 'Записаться'})}
      </form>
    </div>
   </div>
  </section>
  );
};

