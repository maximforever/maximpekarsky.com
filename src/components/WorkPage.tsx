import { MediumContainer } from "./Containers";
import styled from "styled-components/macro";

const WorkExperience = styled.div`
  padding-bottom: 5rem;

  @media only screen and (min-width: 768px) {
    padding-bottom: 9rem;
  }
`;

// this and other styles are duplicated in project.tsx
const Title = styled.h2`
  margin: 0;
  font-weight: 500;
  font-size: 2.2rem;
`;

const Description = styled.p`
  line-height: 1.9;
  margin: 0;
  padding: 0.5rem 0;

  @media only screen and (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

const WorkLogo = styled.img`
  height: 50px;
`;

const Tech = styled.span`
  padding: 0.2rem 0.4rem;
  background: ${({ theme }) => theme.colors.lightGray};
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: 0.2rem;
`;

const WorkPage = () => {
  return (
    <MediumContainer>
      <WorkExperience>
        <a
          href="https://executeprogram.com"
          target="_blank"
          rel="nofollow noreferrer"
        >
          <Title>Execute Program</Title>
        </a>
        <Description>
          <p>
            As a freelance software and curriculum developer for the Execute
            Program platform, I worked on the complete technical edit of the
            curriculum and contributed to feature development.
          </p>
          <strong>Accomplishments</strong>
          <ul>
            <li>
              Completed end-to-end technical edit of the Execute Program
              curriculum.
            </li>
            <li>
              Authored 200+ technical exercises and 10+ original lessons on
              TypeScript, modern JS, RegEx, and SQL.
            </li>
            <li>
              Helped develop website navbar, consistent button component, lesson
              reference sidebar.
            </li>
          </ul>
        </Description>
      </WorkExperience>

      <WorkExperience>
        <a href="https://bonus.ly" target="_blank" rel="nofollow noreferrer">
          <Title>Bonus.ly</Title>
        </a>
        <Description>
          <p>
            Promoted to Engineer II after just a year, I worked on the core
            Bonus.ly recognition product, then Signals: a greenfield product to
            measure employee sentiment with pulse surveys. I participated in the
            entire feature lifecycle and collaborated closely with PMs and
            designers to spec and build end-to-end features.
          </p>
          <p>
            In addition to my core engineering work, I was involved with
            learning, team-building, and development. I led working group
            standardize code review, led technical product demos, helped plan
            and deliver <Tech>React</Tech> training for the team.
          </p>
          <strong>Accomplishments</strong>
          <ul>
            <li>
              Helped rebuilt an outdated CoffeeScript/ERB analytics dashboard
              with <Tech>React</Tech>, <Tech>Nivo</Tech>, and{" "}
              <Tech>D3 .js</Tech>.
            </li>
            <li>
              Pioneered the use of integration testing by implementing
              Cypress.js, documenting workflow.
            </li>
            <li>
              Developed SFTP integrations for HR tools, expanded API endpoints
              to provide secure, sanitized user data.
            </li>
          </ul>
        </Description>
      </WorkExperience>

      <WorkExperience>
        <a
          href="https://www.nyc.gov/site/opportunity/portfolio/products.page"
          target="_blank"
          rel="nofollow noreferrer"
        >
          <Title>NYC Mayor's Office</Title>
        </a>
        <Description>
          <p>
            I completed a development apprenticeship at the NYC Mayor's Office
            for Economic Opportunity. Part of a small team of developers and
            product managers, I worked on AccessNYC (a tool to match New Yorkers
            to city benefits) and GrowingUpNYC (resources for city parents.)
          </p>
          <p>
            I worked closely with the product and neighborhood outreach team as
            the lead developer on a neighborhood analytics dashboard. Using
            Express, Vue, and D3, I built a dashboard to combine data from the
            Google Analytics API and CSV survey results, enabling the team to
            analyze 8000+ monthly user surveys.
          </p>
          <strong>Accomplishments</strong>
          <ul>
            <li>
              Helped document, update, and test 20+ WordPress plugins across
              three nyc.gov apps.
            </li>
            <li>
              Participated in feature development for AccessNYC and
              GrowingUpNYC, two core apps to help provide New Yorkers with city
              resources.{" "}
            </li>
            <li>
              Developed neighborhood analytics dashboard using data from the
              Google Analytics API and CSV survey results, enabling the team to
              analyze 8000+ monthly user surveys.
            </li>
          </ul>
        </Description>
      </WorkExperience>

      <WorkExperience>
        <a
          href="https://www.codecademy.com"
          target="_blank"
          rel="nofollow noreferrer"
        >
          <Title>Codecademy</Title>
        </a>
        <Description>
          <p>
            On the product team at Codecademy, I did whatever it took to enable
            a team of 120 tutors to support our users. I structured and built
            out tools for our out educational programs, delivering the startup's
            first paying product to thousands of paying users.
          </p>

          <strong>Accomplishments</strong>
          <ul>
            <li>
              Led ideation and technical development of a project review feature
              serving 2000+ paid users, which increased NPS from 18 to 43.
              Defined MVP feature set and product roadmap, devised user testing
              strategy, managed release.
            </li>
            <li>
              Participated in feature development for AccessNYC and
              GrowingUpNYC, two core apps to help provide New Yorkers with city
              resources.{" "}
            </li>
            <li>
              Launched a <Tech>Ruby on Rails</Tech> app to efficiently schedule
              tutors with individual availability and skill profiles.
            </li>
          </ul>
        </Description>
      </WorkExperience>
    </MediumContainer>
  );
};

export default WorkPage;
