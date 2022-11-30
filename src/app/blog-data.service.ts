import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BlogDataService {
  posts = [
    {
      username: 'EsportsReporter12',
      title: 'Faker gets solo killed by random barcode username?!',
      body: 'WHO IS THIS? A random barcode username assassinates Fakeron leblanc with lee sin!',
      date: '01/01/2013 - 4:12 am',
      picture: 'faker',
    },
    {
      username: 'Mangolover99',
      title: 'Leffen johns for the 5th time this month',
      body: 'Leffen suffers another defeat to the hands of Plup. Leffen then proceeds to go to twitter and blame food poisoning. Every lost of leffen has had some form of excuse. Coincidence? I think not...',
      date: '05/1/2015 - 12:30 pm',
      picture: 'mango',
    },
    {
      username: 'Leffenlover6',
      title: 'Leffen won EVO!',
      body: 'Leffen has won EVO beating Aramada, Plup, and Hungrybox! Maybe complaining was the secret sauce after all...',
      date: '08/17/2017 - 6:44 pm',
      picture: 'leffen',
    },
    {
      username: 'Illeniial111',
      title: 'Illenium announces his 4th album - Flares',
      body: 'Illenium comes out of retirement to announce his fourth and final album - Flares. He says this album will surround his feelings of revival and will be his best album yet.',
      date: '01/30/2022 - 1:14 pm',
      picture: 'illenium',
    },
    {
      username: 'Shimoshisimp777',
      title: 'Shimoshi becomes a billionaire',
      body: 'Shimoshi has had tremendous success from his startup named iPunchStuff. This company specializes in being built different and being better. Ever since launching his start-up in 2022, he has risen up on the global radar at record speeds!',
      date: '07/07/2025 - 2:14 am',
      picture: 'timmy',
    },
    {
      username: 'Philosophydoodhaha',
      title: 'What is the meaning of life?',
      body: 'After an exhausting weekend, I started to question the meaning of life and what role I play in it',
      date: '02/16/2022 - 5:55 pm',
      picture: 'otter',
    },
    {
      username: 'Kittyluvr',
      title: 'I love fish',
      body: 'All I seem to think about is fish and sleep. Sometimes I wake up to eat then I yawn and fall back asleep. Meow.',
      date: '03/03/2022 - 2:15 pm',
      picture: 'otter',
    },
    {
      username: 'FishyDoc',
      title: 'Suspicious?',
      body: 'Should I fish or do something fishy today? To do or not to do...',
      date: '06/06/2006 - 6:16 pm',
      picture: 'otter',
    },
    {
      username: 'Otterscientist',
      title: 'Cuddle',
      body: 'Cuddling while floating on my back is the best! ',
      date: '02/14/2014 - 2:14 am',
      picture: 'otter',
    },
  ];

  getBlogData() {
    return this.posts;
  }
}
