import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://cdn.poehali.dev/projects/72ec5c92-69ca-46b5-a17f-3383de2098cd/files/4cd3810a-c976-4d11-a260-f30c8739ae71.jpg" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Скульптурный массаж лица и шеи
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto font-light">
            Мягкая, но глубинная работа с мышцами и фасциями лица. Визуальный результат без агрессивных процедур и уколов
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10 text-left">
            {[
              "Отёчность и мешки под глазами",
              "Нечёткий контур и брыли",
              "Дряблость и второй подбородок",
              "Носогубные складки",
              "Тусклый цвет лица",
              "Мышечные зажимы и напряжение"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
          
          <Button 
            size="lg" 
            onClick={scrollToContact}
            className="text-lg px-8 py-6 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all"
          >
            Записаться на массаж
          </Button>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Кому подойдёт
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: "Users",
                title: "Заметны возрастные изменения",
                description: "Дряблость кожи, брыли, второй подбородок, нечёткий контур лица"
              },
              {
                icon: "Moon",
                title: "Отёчность и усталость",
                description: "Просыпаетесь с отёчным лицом, уставшим взглядом, мешками под глазами"
              },
              {
                icon: "Zap",
                title: "Напряжение и зажимы",
                description: "Чувствуете мышечные зажимы в лице и шее, много работаете за компьютером"
              },
              {
                icon: "Sparkles",
                title: "Хотите молодость без уколов",
                description: "Поддерживать тонус кожи и свежий вид без агрессивных процедур"
              }
            ].map((item, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Icon name={item.icon} size={28} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
            Результаты и эффекты
          </h2>
          <p className="text-center text-xl text-muted-foreground mb-16 max-w-3xl mx-auto">
            Это не только про красоту, но и про внутреннее состояние: больше спокойствия, ощущение заботы о себе
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Чёткий овал лица",
                description: "Уменьшение брылей и второго подбородка, более выраженный контур",
                icon: "Smile"
              },
              {
                title: "Свежесть и сияние",
                description: "Снижение отёчности, уход «серости», освежение оттенка кожи",
                icon: "Sun"
              },
              {
                title: "Смягчение морщин",
                description: "Уменьшение выраженности носогубных складок и мелких морщин",
                icon: "Heart"
              },
              {
                title: "Расслабление мышц",
                description: "Ощущение лёгкости в лице и шее, уменьшение зажимов",
                icon: "Wind"
              },
              {
                title: "Улучшение тонуса",
                description: "Повышение упругости кожи шеи и области декольте",
                icon: "TrendingUp"
              },
              {
                title: "Внутренняя гармония",
                description: "Больше спокойствия, расслабления и заботы о себе",
                icon: "Sparkle"
              }
            ].map((item, index) => (
              <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 rounded-full bg-primary/30 flex items-center justify-center mx-auto mb-4">
                  <Icon name={item.icon} size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Как проходит сеанс
          </h2>
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block"></div>
            
            <div className="space-y-12">
              {[
                {
                  step: "01",
                  title: "Консультация",
                  description: "Обсуждаем ваши запросы, состояние кожи, наличие противопоказаний и желаемый результат"
                },
                {
                  step: "02",
                  title: "Оценка состояния",
                  description: "Анализирую зоны напряжения, отёчности, мышечные зажимы для индивидуального подхода"
                },
                {
                  step: "03",
                  title: "Массаж",
                  description: "Бережная работа с мышцами и фасциями лица, шеи, области декольте. Длительность 60-90 минут"
                },
                {
                  step: "04",
                  title: "Рекомендации",
                  description: "Советы по домашнему уходу, частоте сеансов и поддержанию результата"
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-8 items-start animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {item.step}
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl font-semibold mb-3 text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-destructive/5 border-y-2 border-destructive/20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4 mb-8">
            <Icon name="AlertCircle" size={32} className="text-destructive flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Противопоказания и безопасность
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Скульптурный массаж — бережная процедура, но она подходит не всем. Перед началом работы уточняю наличие:
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {[
              "Открытые или незаживших раны",
              "Активные кожные заболевания",
              "Воспалительные процессы и инфекции",
              "Онкологические заболевания",
              "Обострение герпеса",
              "Серьёзные эндокринные нарушения",
              "Выраженная гипертония",
              "Недавние инъекции (менее 2 недель)"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 bg-background p-4 rounded-lg">
                <Icon name="X" className="text-destructive flex-shrink-0 mt-0.5" size={18} />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
          
          <p className="text-center text-lg text-muted-foreground font-medium">
            При наличии сомнений рекомендую консультацию врача
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/72ec5c92-69ca-46b5-a17f-3383de2098cd/files/04a8a080-9a1c-4686-8b21-ed1af755420e.jpg"
                alt="О мастере"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                О мастере и философии пространства
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Я работаю не просто с внешними проявлениями — морщинами, овалом лица, отёчностью. 
                  Я работаю с вашим телом и душой, с мышечными зажимами и накопленным стрессом.
                </p>
                <p>
                  Каждый сеанс — это личное пространство для перезагрузки, где через бережный телесный 
                  подход вы улучшаете не только внешний вид, но и внутреннее состояние.
                </p>
                <p className="font-medium text-foreground">
                  Это не просто «процедура по прайсу» — это забота, внимание и комплексный подход к вашему здоровью и красоте.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-secondary/30" id="contact">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
            Форматы и цены
          </h2>
          <p className="text-center text-xl text-muted-foreground mb-16 max-w-2xl mx-auto">
            Выберите формат, который подходит именно вам
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Разовый сеанс",
                price: "Уточните стоимость",
                description: "Познакомиться с методикой и почувствовать первый эффект",
                features: [
                  "Продолжительность 60-90 минут",
                  "Консультация и оценка",
                  "Массаж лица, шеи, декольте",
                  "Рекомендации по уходу"
                ],
                popular: false
              },
              {
                title: "Мини-курс",
                price: "3-5 процедур",
                description: "Закрепить изменения и увидеть стабильный результат",
                features: [
                  "Видимое улучшение овала",
                  "Снижение отёчности",
                  "Более свежий цвет лица",
                  "Расслабление мышц"
                ],
                popular: true
              },
              {
                title: "Полный курс",
                price: "8-10 процедур",
                description: "Комплексно поработать с овалом лица и тоном кожи",
                features: [
                  "Максимальный эффект",
                  "Устойчивый результат",
                  "Глубокая проработка зажимов",
                  "Долгосрочное улучшение"
                ],
                popular: false
              }
            ].map((plan, index) => (
              <Card 
                key={index} 
                className={`relative ${plan.popular ? 'border-primary border-4 shadow-xl scale-105' : 'border-2'} hover:shadow-2xl transition-all animate-scale-in`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-1 rounded-full text-sm font-semibold">
                    Популярный выбор
                  </div>
                )}
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">{plan.title}</h3>
                  <p className="text-3xl font-bold text-primary mb-4">{plan.price}</p>
                  <p className="text-muted-foreground mb-6 min-h-[60px]">{plan.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <Icon name="Check" className="text-primary flex-shrink-0 mt-0.5" size={20} />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : 'bg-secondary hover:bg-secondary/80'} text-foreground rounded-full py-6`}
                    size="lg"
                  >
                    Записаться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
            Отзывы клиентов
          </h2>
          <p className="text-center text-xl text-muted-foreground mb-16">
            Что говорят люди после курса массажа
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Анна, 42 года",
                text: "После курса массажа я увидела реальные изменения — овал лица стал чётче, ушла отёчность. Но главное — ощущение лёгкости и расслабления, которого мне так не хватало.",
                rating: 5
              },
              {
                name: "Елена, 38 лет",
                text: "Я скептически относилась к массажу лица, но результат превзошёл ожидания. Кожа стала более упругой, цвет лица свежее. Чувствую себя отдохнувшей после каждого сеанса.",
                rating: 5
              },
              {
                name: "Мария, 45 лет",
                text: "Массаж помог мне справиться с мышечными зажимами в шее, которые мучили годами. Приятный бонус — менее выраженные носогубные складки и подтянутая кожа.",
                rating: 5
              },
              {
                name: "Ирина, 50 лет",
                text: "Это не просто процедура, это забота о себе в чистом виде. Атмосфера, внимание мастера, результат — всё на высшем уровне. Рекомендую всем, кто хочет выглядеть и чувствовать себя лучше.",
                rating: 5
              }
            ].map((review, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4 italic">
                    "{review.text}"
                  </p>
                  <p className="font-semibold text-foreground">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Частые вопросы
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: "Больно ли это?",
                answer: "Скульптурный массаж — это глубокая работа с мышцами, но она не должна причинять сильную боль. Могут быть приятные ощущения давления и натяжения, особенно в зонах зажимов. Я всегда адаптирую интенсивность под ваши ощущения."
              },
              {
                question: "Сколько нужно сеансов, чтобы увидеть результат?",
                answer: "Первые изменения можно заметить уже после 1-2 сеансов — уменьшение отёчности, свежесть лица. Для стабильного эффекта рекомендуется курс из 8-10 процедур, который позволит глубоко проработать мышцы и закрепить результат."
              },
              {
                question: "Как часто нужно ходить?",
                answer: "В начале курса оптимально 1-2 раза в неделю. После завершения курса для поддержания результата достаточно 1 сеанса в 2-4 недели. Частота зависит от ваших целей и состояния кожи."
              },
              {
                question: "Можно ли совмещать с другими процедурами?",
                answer: "Да, массаж хорошо сочетается с домашним уходом и некоторыми косметологическими процедурами. Важно соблюдать интервалы: после инъекций — минимум 2 недели, после пилингов — 1-2 недели. Обязательно сообщите мне о других процедурах."
              },
              {
                question: "Есть ли возрастные ограничения?",
                answer: "Скульптурный массаж подходит людям от 25 лет и старше. В молодом возрасте он работает профилактически, помогая поддерживать тонус и предотвращать возрастные изменения. После 35-40 лет эффект особенно заметен."
              },
              {
                question: "Как долго сохраняется результат?",
                answer: "После полного курса результат держится от 3 до 6 месяцев при условии поддерживающих сеансов и правильного домашнего ухода. Регулярная практика позволяет сохранять эффект на долгий срок."
              }
            ].map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-2 rounded-lg px-6 bg-background">
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-background to-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <img 
              src="https://cdn.poehali.dev/projects/72ec5c92-69ca-46b5-a17f-3383de2098cd/files/4f7019e8-f1d1-4f0e-9507-fe11c2ebc745.jpg"
              alt="Spa elements"
              className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg mb-6"
            />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Готовы начать преображение?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Запишитесь на консультацию или первый сеанс — и почувствуйте заботу о себе через бережный телесный подход
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all"
            >
              <Icon name="MessageCircle" size={24} className="mr-2" />
              Написать в WhatsApp
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 rounded-full border-2 hover:bg-secondary"
            >
              <Icon name="Phone" size={24} className="mr-2" />
              Позвонить
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t bg-background">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>© 2024 Скульптурный массаж лица. Пространство для тела и души</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
