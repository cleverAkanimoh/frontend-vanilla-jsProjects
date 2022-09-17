// lorem text

let text = [
    `Getting Started: What You Need to Do to Get Going and Make Your First HTML
Page. If you have always wanted to make your own Web page, but you were under the
impression that it would be very difficult, then there should really be no problem.To
create your own Web page, all you need to have is a thorough understanding of HTML.
And HTML is not all that difficult to learn. HTML is the brainchild of Tim Berners Lee. In 1990, Berners Lee needed something
that would help scientists coming from different colleges and universities access
documents and research from other scientists. That problem led to Berners Lee
inventing the World Wide Web, the hypertext transfer protocol or HTTP, and HTML. You can start with using Notepad, a text editor that is included in your Windows
installation.`,
    `If you are not using Windows, or if you prefer other text editors, there is a
lot of free software that you can download from the Internet. A database-management system (DBMS) is a collection of interrelated data and a set of programs to access
those data. This is a collection of related data with an implicit meaning and hence is a database. The collection
of data, usually referred to as the database, contains information relevant to an enterprise. The primary goal of
a DBMS is to provide a way to store and retrieve database information that is both convenient and efficient. By
data, we mean known facts that can be recorded and that have implicit meaning. `,
    `The management system is important because without the existence of some kind of rules and regulations it is
not possible to maintain the database. We have to select the particular attributes which should be included in a
particular table; the common attributes to create relationship between two tables; if a new record has to be
inserted or deleted then which tables should have to be handled etc. These issues must be resolved by having
some kind of rules to follow in order to maintain the integrity of the database.`,
    `Database systems are designed to manage large bodies of information. Management of data involves both
defining structures for storage of information and providing mechanisms for the manipulation of information. In
addition, the database system must ensure the safety of the information stored, despite system crashes or
attempts at unauthorized access. If data are to be shared among several users, the system must avoid possible
anomalous results.
Because information is so important in most organizations, computer scientists have developed a large body of
concepts and techniques for managing data. These concepts and technique form the focus of this book.`,
    `his book is designed for designers and coders with at least a few years of experience in web development
who wish to rapidly upgrade their skills to the new W3C standards, or who desire to take their explorations
of CSS Transforms, Transitions, and Animations in bold new directions. It is not an introductory web design
text: the book assumes at least a basic understanding of HTML, CSS, and JavaScript. As web development is a
multidisciplinary process, I’ll also be addressing issues such as accessibility and semantics, concepts that the
reader should be familiar with.`,
    `Transitions have a couple of limitations. First, they occur in response to some
action, such as hovering over an element. We can’t initiate a transition with-
out some interaction by a site visitor. Second, you have only a single starting
point and a single end point.`,
    `One limitation of print is that it’s static. We won’t be able to show actual transi-
tions and animations in this book. The figures in this book show before, after,
and during moments and describe the movement.
However, every example presented in this book has a corresponding live exam-
ple, which you can download, experiment with, and use. Each example is iden-
tified by number in the text, and you can view each in action as a demo to see
what’s being discussed or as a way to double-check your code`,
    `We assume that you’ve picked up this book because you’re interested in learn-
ing about animating web pages. You should already know how to build web
pages and websites. You might be new to web design, or perhaps you’ve been
developing websites for years. As long as you can create an HTML document
and know how to work with CSS, you’ll be able to follow along and work
through the examples`,
    `The reason for the .stage div is to provide a frame for the animation.
Because you and I are probably looking at browsers open to different widths
and heights, it would be hard to use the browser’s edge as the thing the ball
bounces against. By creating a stage for the ball, we can including it in the
animation and make it more likely we’re both seeing the same thing.`,
    `Although tools like Adobe’s Edge Animate or Tumult’s Hype 2 can create ani-
mation for us, we won’t be using them in this book. We won’t be using Photo-
shop or Maya or any other tool that can create movement. These are all great
tools, but we’re going to create movement by writing code.
That means that the tool requirements are minimal and you should already
have everything you need. You’ll need a code editor, a modern browser, and
working knowledge of HTML and CSS. Oh, and bring your imagination`,
    `Brackets isn’t limited to running on a single platform. It works on Windows,
Mac, and Linux, so if you switch operating systems between home and work,
you can still use it. It has some additional features such as live reload, so you
don’t have to keep refreshing your browser to see the effect of your changes.
Brackets can be extended and already has an active community building exten-
sions for it. Brackets is built using the same technologies you use to develop
websites. It’s built with HTML, CSS, and JavaScript, so you may not need to
wait for someone else to develop an extension. You probably have all the skills
needed to create it yourself`,
    `For nearly two decades the Cascading Style Sheets (CSS) standard has been used to control the presentation of
web pages. HTML defines what something is: a heading, a paragraph, an address, an image, etc. CSS describes
how that element is presented to the user, including such qualities as its color, border, and dimensions. CSS
includes presentational controls that few web designers even consider, such as the way text-to-speech services
pronounce web page content.
All of the original presentational rules of CSS were designed for static content; that is, HTML elements that
did not change over time. Until recently, if you wanted an image to fade in on a web page, there were only a few
web technologies that you could use, the most popular of which were JavaScript and Flash. hese technologies
are not complete solutions, however; they have several serious disadvantages, as I’ll discuss at the end of the
chapter.`,
    `Now, we have the CSS3 Transforms, Transitions, and Animation Modules. hese are extensions of CSS
syntax that are supported in all modern browsers, overlapping, and in some cases, replacing the traditional roles
of JavaScript and Flash. While CSS3 is not without its limitations, the technology is the way forward for a lot of
dynamic web content.
To understand how we got here, you need to know where we’ve been. his introductory chapter will provide
an overview of the CSS development process and where web development stands now, looking into the future`
];

const form = document.querySelector('.lorem-form');
const amt = document.querySelector('#amount');
const result = document.querySelector('.lorem-text');

form.onsubmit = (e) => {
    e.preventDefault();
    let value = parseInt(amount.value);
    let random = Math.floor(Math.random() * text.length)

    //empty value
    // negative values
    // > 13
    if (isNaN(value) || value<=0 || value> 13){
        result.innerHTML = `<p class="result">${text[random]}</p>`;
    } else {
        let tempText = text.slice(0,value);
        tempText= tempText.map((item)=>{
            return `<p class="result">${item} </p>`;
        }).join('');
        result.innerHTML = tempText;
    };
    amount.value = '';
};