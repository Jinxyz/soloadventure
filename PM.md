Soloäventyr

Inledning
Arbetets syfte var att skapa ett spel där man gjorde egna val baserade på en saga. Detta med hjälp av en databas där sagans text och val är skriven. Arbetet började med att sätta upp en databas som fylldes med själva berättelsen och valen man kan göra. Sedan användes databasen på webbsidan för att göra det spelbart.

Bakgrund
Jag har använt node och mysql för att sätta upp en databas och även hosta databasen till en webbsida. Sedan användes databasen genom att göra länkar av "links" och skriva ut "story" som text på webbsidan. Links förflyttar användaren till nästa "story.id" där berättelsen fortsätter och fler länkar dyker upp. För att desigan webbsidan har Bootstrap använts eftersom det är ett väldigt snabbt och enkelt sätt att designa utan att behöva skriva allt själv. Det användes eftersom designen inte var någon större faktor i hur spelet fungerade, det var bara lite mer kul att titta på sidan när allt var designat. 
Mitt planeringsarbete var ett diagram på draw.io där story och valen till storyn skrevs upp. När diagrammet var nära färdigt matades det in i databasen för att sedan kunna användas för webbsidan. 
Planeringen/diagrammet finns i 'soloadventurediagram.PNG'

Positiva erfarenheter
Jag tycker att det gick helt okej att använda javascript för att få texten från databasen att visa sig samt att göra länkarna. Det gick även bra för mig är att använda Bootstrap för att designa hemsidan, eftersom det inte krävs så mycket för att designa som man vill och det är relativt simpelt att ändra på det.

Negativa erfarenheter
Från början hade jag stora problem med att använda pug, eftersom jag inte riktigt förstod vad det var eller hur man skulle använda det. När jag skulle använda Bootstrap för att designa hemsidan använde jag html2jade, vilket underlättade väldigt mycket, eftersom det bara var att klista in html så fick man ut det i pug. Jag hade problem med hur spacingen och förskjutningar fungerade i pug. Jag gjorde fel på det från början och förstod inte varför det blev fel. Jag tycker att det var svårt att förstå hur mina routes fungerade och varför de gjorde det. 

Sammanfattning
Jag har lärt mig mycket av detta projekt och speciellt om hur mysql och node fungerar. Jag tycker att jag kan relativt mycket om det nu och har en mycket bättre förståelse av hur det kan användas till skillnad från i början av projektet. Jag känner mig också mer säker angående pug på grund av misstagen jag gjorde och lärdomarna jag fick av det. Jag har även lärt mig en del om routes men känner fortfarande att det är lite svårt.
Min produkt är långt ifrån perfekt men den går att använda och spela vilket var poängen med projektet. Jag känner att designen inte är speciellt barnanpassad utan att den är väldigt simplistisk eftersom det bara är några olika färger på sidan. Jag känner att jag gärna hade haft någon slags bild på ett troll eller liknande för att göra det tydligare att det är en saga om ett troll. Själva storyn är också ganska kort och har bara ett slut vilket jag gärna skulle fixa till, men det är egentligen ovesentligt. 