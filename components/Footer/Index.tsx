import React from 'react';
import Link from 'next/link';
import { Segment, Grid, List, Header, Container } from 'semantic-ui-react';

const Index = () => {
  return (
    <Segment
      vertical
      as="footer"
      style={{
        padding: '4em 0em',
        marginTop: '3em',
        borderTop: '1px solid #f2f2f2',
      }}
    >
      <Container text>
        <Grid stackable>
          <Grid.Row columns={3}>
            <Grid.Column width={4}>
              <Header as="h4" content="Nosotros" />
              <List>
                <List.Item>
                  <Link href="/about">
                    <a>Conoce más</a>
                  </Link>
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={5}>
              <Header as="h4" content="Servicios" />
              <List>
                <List.Item>
                  <Link href="/">
                    <a>Todos los productos</a>
                  </Link>
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as="h4" content="Hecho por" />
              <List>
                <List.Item>
                  Mauricio Lemús contruido siguiendo el curso de
                  <Link href="/">
                    <a>Platzi Next.JS</a>
                  </Link>
                </List.Item>
                <List.Item
                  icon="github"
                  style={{ display: 'flex' }}
                  content={<a href="https://github.com/JMauricio22">GitHub</a>}
                />
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <div className="colophon">
          <p className="colophon-entry">
            Icons made by{' '}
            <a
              target="_blank"
              href="https://www.flaticon.com/authors/freepik"
              title="Freepik"
            >
              Freepik
            </a>
            {' from '}
            <a
              target="_blank"
              href="https://www.flaticon.com/"
              title="Flaticon"
            >
              www.flaticon.com
            </a>
          </p>
          <p className="colophon-entry">
            Avocado images taken from{' '}
            <a
              className="acnor"
              target="_blank"
              href="https://www.californiaavocado.com/avocado101/avocado-varieties"
              title="California Avocado"
            >
              Avocado 101
            </a>
            {' at '}
            <a
              target="_blank"
              href="https://www.californiaavocado.com"
              title="Flaticon"
            >
              California Avocado
            </a>
          </p>
        </div>
      </Container>
      <style jsx>{`
        .colophon {
          text-align: center;
          margin-top: 3.2rem;
          font-size: 0.8rem;
        }
        .colophon-entry {
          color: grey;
          margin-bottom: 0;
        }
      `}</style>
    </Segment>
  );
};

export default Index;
