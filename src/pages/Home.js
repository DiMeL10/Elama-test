import React from 'react';

import Container from '~c/Container/Container';
import Button from '~c/Button/Button';
import Service from '~c/Service/Service';

import './Home.scss';

function Home() {
    return (
        <div className="home-page">
            <section className="home-page__banner">
                <Container>
                    <div className="home-page__banner-content">
                        <h1 className="home-page__banner-title">
                            Возьмем заботу о вашей интернет&#8209;рекламе на себя
                        </h1>

                        <div className="home-page__banner-form">
                            <p className="home-page__banner-text lead">
                                Поможем найти покупателей с помощью контекстной и таргетированной рекламы и&nbsp;расскажем о результатах на понятном языке.
                            </p>

                            <div className="home-page__banner-column">
                                <div className="home-page__banner-button">
                                    <Button
                                        type="button"
                                        theme="green"
                                        size="m"
                                        text="Заполнить бриф"
                                    />
                                </div>
                                <a className="home-page__banner-link">Получить консультацию</a>
                            </div>

                            <img className="home-page__banner-img" src="/img/polygon.png" />
                        </div>
                    </div>
                </Container>
            </section>

            <section className="home-page__services">
                <Container>
                    <div className="home-page__services-content">
                        <h1 className="home-page__services-title">
                            Ведем контекстную и таргетированную рекламу
                        </h1>

                        <div className="home-page__services-block">
                            <Service
                                img="/img/service-imac.svg"
                                title="Привлекаем целевой трафик на сайт"
                                text="Создаем и оптимизируем рекламные кампании с&nbsp;учетом особенностей вашего бизнеса, чтобы вы&nbsp;получали максимум потенциальных клиентов"
                            />
                            <Service
                                img="/img/service-student.svg"
                                title="Совершенствуем нашу работу"
                                text="Используем все возможности рекламных систем и&nbsp;eLama для результативной работы с рекламными кампаниями"
                            />
                            <Service
                                img="/img/service-stats.svg"
                                title="Помогаем стать эффективнее"
                                text="Выбираем метрики в соответствии с вашими бизнес-задачами и понятно рассказываем о&nbsp;результатах рекламы"
                            />
                        </div>
                    </div>
                </Container>
            </section>

            <section className="home-page__analytics">
                <Container>
                    <div className="home-page__analytics-content">
                        <div className="home-page__analytics-left">
                            <img 
                                className="home-page__analytics-img"
                                src="/img/analytics.png"
                                alt={"Веб-аналитика"}
                            />
                        </div>
                
                        <div className="home-page__analytics-right">
                            <h1 className="home-page__analytics-title">
                                Настроим системы веб&#8209;аналитики или доработаем текущие настройки
                            </h1>
                            <p className="home-page__analytics-text">
                                Создадим цели, события и свяжем системы аналитики с рекламными системами, чтобы вы получали правильные данные
                            </p>

                            <div className="home-page__analytics-footer">
                                <div className="home-page__analytics-button">
                                    <Button
                                        type="button"
                                        theme="green"
                                        size="m"
                                        text="Заполнить бриф"
                                    />
                                </div>
                                <a className="home-page__analytics-link">Получить консультацию</a>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="home-page__stock">
                <Container>
                    <div className="home-page__stock-content">
                        <div className="home-page__stock-left">
                            <h1 className="home-page__stock-title">
                                Бесплатная стартовая кампания
                            </h1>
                            <Button
                                type="button"
                                theme="green"
                                size="m"
                                text="Заполнить бриф"
                            />
                        </div>
                        
                        <img
                            className="home-page__stock-arrow-radius"
                            src="/img/arrow-radius.svg"
                        />
                        <img className="home-page__stock-arrow_down" src="/img/arrow.svg" />
                        <p className="home-page__stock-text">
                            Для клиентов с любыми бюджетами создадим стартовую кампанию бесплатно. Подберем ключи, напишем объявления, настроим инструменты автоматизации.
                        </p>
                        <img className="home-page__stock-arrow" src="/img/arrow.svg" />
                        <img className="home-page__stock-arrow_down" src="/img/arrow.svg" />
                        <p className="home-page__stock-text-right">
                            Для этого пополните баланс на 10&nbsp;000 рублей и заполните бриф
                        </p>
                    </div>
                </Container>
            </section>
        </div>
    )
}

export default Home;