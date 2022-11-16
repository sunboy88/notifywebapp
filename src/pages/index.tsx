import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Row, Col } from "antd";
import PageContent from 'components/Layouts/page-content';
import NftItem from "../components/nfts/nftItem";
const nftItem = {
  bg: 'http://yoda.hypeople.studio/yoda-admin-template/react/static/media/nft-slide-image-1.bae6803e.png',
  title: "Perfect Mess 1",
  lastBid: "1.44 ETH",
  price: "$4,852.23",
  avatars: []
};
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      <Row gutter={[32, 32]}>
        <Col span={24}>
          <PageContent
            title="Blank Page"
            breadcrumb={[
              {
                title: "Pages",
              },
              {
                title: "Blank Page",
              }
            ]}
          />
        </Col>
      </Row>
      <Row gutter={[32, 32]}>
        <Col span={24}>
          <Row style={{ marginLeft: -16, marginRight: -16 }} gutter={[0, 32]}>
            {
              [1,2,3,4,5,6].map((item, key) => (<Col md={8} span={24} className="hp-p-16" key={key}>
                <NftItem item={nftItem} />
              </Col>))
            }
          </Row>
        </Col>
      </Row>
    </div>
  )
}
