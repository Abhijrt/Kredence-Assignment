import React, { Component } from "react";

export default class Data extends Component {
  render() {
    const { value } = this.props;
    switch (value) {
      case "apple":
        return (
          <div style={styles.container}>
            <p style={styles.dataContainer}>
              Apple Computer Company was founded on April 1, 1976, by Steve
              Jobs, Steve Wozniak, and Ronald Wayne as a business
              partnership.[21][24] The company's first product is the Apple I, a
              computer designed and hand-built entirely by Wozniak.[25][26] To
              finance its creation, Jobs sold his only motorized means of
              transportation, a VW Microbus, for a few hundred dollars, and
              Wozniak sold his HP-65 calculator for US$500 (equivalent to $2,246
              in 2019).[27] Wozniak debuted the first prototype at the Homebrew
              Computer Club in July 1976.[28][29] The Apple I was sold as a
              motherboard with CPU, RAM, and basic textual-video chips—a base
              kit concept which would not yet be marketed as a complete personal
              computer.[30] It went on sale soon after debut for US$666.66
              (equivalent to $2,995 in 2019).[31][32][33][34][35]:180 Wozniak
              later said he was unaware of the coincidental mark of the beast in
              the number 666, and that he came up with the price because he
              liked "repeating digits".[36] Apple Computer, Inc. was
              incorporated on January 3, 1977,[37][38] without Wayne, who had
              left and sold his share of the company back to Jobs and Wozniak
              for $800 only twelve days after having co-founded Apple.[39][40]
              Multimillionaire Mike Markkula provided essential business
              expertise and funding of US$250,000 (equivalent to $1,054,778 in
              2019) to Jobs and Wozniak during the incorporation of
              Apple.[41][42] During the first five years of operations, revenues
              grew exponentially, doubling about every four months. Between
              September 1977 and September 1980, yearly sales grew from $775,000
              to $118 million, an average annual growth rate of 533%.[43][44]
            </p>
          </div>
        );
      case "amazon":
        return (
          <div style={styles.container}>
            <p style={styles.dataContainer}>
              Jeff Bezos founded Amazon in July 1994. He chose Seattle because
              of technical talent as Microsoft is located there.[30] In May
              1997, the organization went public. The company began selling
              music and videos in 1998, at which time it began operations
              internationally by acquiring online sellers of books in United
              Kingdom and Germany. The following year, the organization also
              sold video games, consumer electronics, home-improvement items,
              software, games, and toys in addition to other items. In 2002, the
              corporation started Amazon Web Services (AWS), which provided data
              on Web site popularity, Internet traffic patterns and other
              statistics for marketers and developers. In 2006, the organization
              grew its AWS portfolio when Elastic Compute Cloud (EC2), which
              rents computer processing power as well as Simple Storage Service
              (S3), that rents data storage via the Internet, were made
              available. That same year, the company started Fulfillment by
              Amazon which managed the inventory of individuals and small
              companies selling their belongings through the company internet
              site. In 2012, Amazon bought Kiva Systems to automate its
              inventory-management business, purchasing Whole Foods Market
              supermarket chain five years later in 2017.
            </p>
          </div>
        );
      case "microsoft":
        return (
          <div style={styles.container}>
            <p style={styles.dataContainer}>
              Microsoft Corporation (/maɪkroʊ.sɒft/) is an American
              multinational technology company with headquarters in Redmond,
              Washington. It develops, manufactures, licenses, supports, and
              sells computer software, consumer electronics, personal computers,
              and related services. Its best known software products are the
              Microsoft Windows line of operating systems, the Microsoft Office
              suite, and the Internet Explorer and Edge web browsers. Its
              flagship hardware products are the Xbox video game consoles and
              the Microsoft Surface lineup of touchscreen personal computers. In
              2016, it was the world's largest software maker by revenue
              (currently Alphabet/Google has more revenue).[3] The word
              "Microsoft" is a portmanteau of "microcomputer software".[4]
              Microsoft ranked No. 21 in the 2020 Fortune 500 rankings of the
              largest United States corporations by total revenue.[5] It is
              considered one of the Big Five technology companies alongside
              Amazon, Apple, Google, and Facebook. Microsoft was founded by Bill
              Gates and Paul Allen on April 4, 1975, to develop and sell BASIC
              interpreters for the Altair 8800. It rose to dominate the personal
              computer operating system market with MS-DOS in the mid-1980s,
              followed by Microsoft Windows. The company's 1986 initial public
              offering (IPO), and subsequent rise in its share price, created
              three billionaires and an estimated 12,000 millionaires among
              Microsoft employees. Since the 1990s, it has increasingly
              diversified from the operating system market and has made a number
              of corporate acquisitions, their largest being the acquisition of
              LinkedIn for $26.2 billion in December 2016,[6] followed by their
              acquisition of Skype Technologies for $8.5 billion in May 2011.[7]
            </p>
          </div>
        );
      case "kredence":
        return (
          <div style={styles.container}>
            <p style={styles.dataContainer}>
              Kredence Digital is an IT Solutions and services company that aims
              to unleash full potential of Internet and Mobile technologies to
              drive better business outcomes. We are a group of young chartered
              accountants, management professionals and technology enthusiasts
              committed to offering world-class solutions that go to make
              consumers happier and businesses more profitable. We do this by
              helping businesses and consumers Connect, Communicate, Collaborate
              and Commercialize transactions with a suite of innovative
              products, services and tools that harness the power of digital
              media and mobile technology. For consumers, Kredence aims to make
              products and services Accessible, Affordable and Accountable. For
              businesses, we enable quick customer sourcing, Cost effective
              customer acquisition and stronger customer loyalty. Kredence
              strives to play an important role in shaping our digital society
              in a flat, boundary less world.
            </p>
          </div>
        );
      case "facebook":
        return (
          <div style={styles.container}>
            <p style={styles.dataContainer}>
              Zuckerberg built a website called "Facemash" in 2003 while
              attending Harvard University. The site was comparable to Hot or
              Not and used "photos compiled from the online face books of nine
              Houses, placing two next to each other at a time and asking users
              to choose the "hotter" person".[17] Facemash attracted 450
              visitors and 22,000 photo-views in its first four hours.[18] The
              site was sent to several campus group listservs, but was shut down
              a few days later by Harvard administration. Zuckerberg faced
              expulsion and was charged with breaching security, violating
              copyrights and violating individual privacy. Ultimately, the
              charges were dropped.[17] Zuckerberg expanded on this project that
              semester by creating a social study tool ahead of an art history
              final exam. He uploaded all art images to a website, each of which
              was accompanied by a comments section, then shared the site with
              his classmates.[19] A "face book" is a student directory featuring
              photos and personal information.[18] In 2003, Harvard had only a
              paper version[20] along with private online directories.[17][21]
              Zuckerberg told The Harvard Crimson, "Everyone's been talking a
              lot about a universal face book within Harvard. ... I think it's
              kind of silly that it would take the University a couple of years
              to get around to it. I can do it better than they can, and I can
              do it in a week."[21] In January 2004, Zuckerberg coded a new
              website, known as "TheFacebook", inspired by a Crimson editorial
              about Facemash, stating, "It is clear that the technology needed
              to create a centralized Website is readily available ... the
              benefits are many." Zuckerberg met with Harvard student Eduardo
              Saverin, and each of them agreed to invest $1,000 in the site.[22]
              On February 4, 2004, Zuckerberg launched "TheFacebook", originally
              located at thefacebook.com.
            </p>
          </div>
        );
      default:
        return <React.Fragment></React.Fragment>;
    }
  }
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
  },
  dataContainer: {
    paddingRight: "30px",
  },
};
