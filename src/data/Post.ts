import { Post } from "@/types/Post";

export const posts: Post[] = [
  {
    id: "1",
    author: {
      name: "Sarah Johnson",
      title:
        "Criminal Defense Attorney | Legal Consultant | Human Rights Advocate",
      avatar:
        "https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg",
    },
    content:
      "عندما يريد العالم أن يتكلّم ، فهو يتحدّث بلغة يونيكود. تسجّل الآن لحضور المؤتمر الدولي العاشر ليونيكود، الذي سيعقد في آذار بمدينة مَايِنْتْس، ألمانيا. سيجمع المؤتمر بين خبراء من كافة قطاعات الصناعة على الشبكة العالمية انترنيت ويونيكود، حيث ستتم، على الصعيدين الدولي والمحلي على حد سواء مناقشة سبل استخدام يونيكود في النظم القائمة وفيما يخص التطبيقات الحاسوبية، الخطوط، تصميم النصوص والحوسبة متعددة اللغات.",
    timePosted: "2d",
    images: [
      "https://lawbhoomi.com/wp-content/uploads/2023/04/law-28.webp",
      "https://kinnaird.edu.pk/wp-content/uploads/2024/03/top-law-firm-pakistan.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ3QWqpG5O0ryOogEiU3Tke2hofzyDu8XeXA&s",
      "https://example.com/image4.jpg",
    ],
    reactions: {
      avatars: [
        "https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg",
        "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
        "https://media.gettyimages.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg",
      ],
      count: 493,
      mentionedUser: "Anas AKIL",
    },
    stats: {
      comments: 9,
      reposts: 5,
    },
  },
  {
    id: "2",
    author: {
      name: "Ahmed Hassan",
      title: "Senior Partner | International Law Expert | Legal Tech Innovator",
      avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671857",
    },
    content:
      "يولد جميع الناس أحراراً متساوين في الكرامة والحقوق. وقد وهبوا عقلاً وضميراً وعليهم أن يعامل بعضهم بعضاً بروح الإخاء. العدالة أساس الملك وحقوق الإنسان غير قابلة للتصرف.",
    timePosted: "5h",
    images: [
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f",
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f",
    ],
    reactions: {
      avatars: [
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
        "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c",
      ],
      count: 328,
      mentionedUser: "Maria Silva",
    },
    stats: {
      comments: 15,
      reposts: 8,
    },
  },
  {
    id: "3",
    author: {
      name: "Fatima Al-Sayed",
      title: "Corporate Law Specialist | Litigation Expert | Legal Consultant",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
    },
    content:
      "من حق كل فرد أن يلجأ إلى المحاكم الوطنية لإنصافه عن أعمال فيها اعتداء على الحقوق الأساسية التي يمنحها له القانون. العدل أساس الملك، والقانون هو السيف الذي يحمي الحق.",
    timePosted: "1d",
    images: [
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f",
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f",
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f",
    ],
    reactions: {
      avatars: [
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
        "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c",
      ],
      count: 567,
      mentionedUser: "John Doe",
    },
    stats: {
      comments: 23,
      reposts: 12,
    },
  },
  {
    id: "4",
    author: {
      name: "Karim Mostafa",
      title: "Constitutional Law Expert | Human Rights Defender",
      avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5",
    },
    content:
      "القانون العادل هو الذي يحمي حقوق الجميع بالتساوي. من واجبنا كمحامين أن نضمن وصول العدالة لكل فرد في المجتمع.",
    timePosted: "3d",
    images: ["https://images.unsplash.com/photo-1589829545856-d10d557cf95f"],
    reactions: {
      avatars: ["https://images.unsplash.com/photo-1544005313-94ddf0286df2"],
      count: 234,
      mentionedUser: "Lisa Chen",
    },
    stats: {
      comments: 18,
      reposts: 7,
    },
  },
  {
    id: "5",
    author: {
      name: "Layla Ibrahim",
      title: "Family Law Specialist | Mediation Expert",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
    },
    content:
      "الوساطة هي الطريق الأمثل لحل النزاعات الأسرية. نحن نؤمن بالحلول السلمية التي تحافظ على الروابط الاجتماعية.",
    timePosted: "4d",
    images: [
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f",
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f",
    ],
    reactions: {
      avatars: [
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
        "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c",
      ],
      count: 456,
      mentionedUser: "Omar Khalil",
    },
    stats: {
      comments: 31,
      reposts: 15,
    },
  },
];
