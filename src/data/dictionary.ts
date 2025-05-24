import { Category } from '../types';

export const categories: Category[] = [
  {
    id: 'food',
    name: 'Kategori Makanan',
    words: [
      { korean: '먹다', indonesian: 'makan' },
      { korean: '라면', indonesian: 'ramyon' },
      { korean: '떡국', indonesian: 'tokguk' },
      { korean: '숟가락', indonesian: 'sendok' },
      { korean: '밥', indonesian: 'nasi' },
      { korean: '물', indonesian: 'air' },
      { korean: '김치', indonesian: 'kimchi' },
      { korean: '고기', indonesian: 'daging' },
    ]
  },
  {
    id: 'greeting',
    name: 'Kategori Salam',
    words: [
      { korean: '안녕하세요', indonesian: 'halo (formal)' },
      { korean: '안녕', indonesian: 'hai (informal)' },
      { korean: '감사합니다', indonesian: 'terima kasih (formal)' },
      { korean: '고마워', indonesian: 'makasih (informal)' },
      { korean: '잘 가', indonesian: 'selamat tinggal' },
      { korean: '반갑습니다', indonesian: 'senang bertemu anda' },
    ]
  },
  {
    id: 'basic',
    name: 'Kata Dasar',
    words: [
      { korean: '네', indonesian: 'ya' },
      { korean: '아니요', indonesian: 'tidak' },
      { korean: '좋아요', indonesian: 'bagus/suka' },
      { korean: '미안해요', indonesian: 'maaf' },
      { korean: '이름', indonesian: 'nama' },
      { korean: '사람', indonesian: 'orang' },
    ]
  },
  {
    id: 'numbers',
    name: 'Angka',
    words: [
      { korean: '하나', indonesian: 'satu' },
      { korean: '둘', indonesian: 'dua' },
      { korean: '셋', indonesian: 'tiga' },
      { korean: '넷', indonesian: 'empat' },
      { korean: '다섯', indonesian: 'lima' },
      { korean: '여섯', indonesian: 'enam' },
      { korean: '일곱', indonesian: 'tujuh' },
      { korean: '여덟', indonesian: 'delapan' },
    ]
  },
];