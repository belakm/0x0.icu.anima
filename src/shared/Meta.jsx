import React, { Component } from 'react';
import { MetaTags } from 'react-meta-tags';

class Meta extends Component {

  state = {
    title: 'Nina Kosednar',
    description: 'Art portfolio of Nina Kosednar, alias Sitri.',
    tags: 'Sitri, Nina Kosednar, Portfolio',
    siteUrl: 'https://0x0.icu/sitri',
    siteName: '0x0.icu.anima',
    imageUrl: '',
    imageAlt: 'Love or die',
    twitterUsername: '@sitridraws'
  }

  render() {
    return (
      <MetaTags>
        <title>{this.state.title}</title>
        <meta name="description" content={this.state.description} />
        
        {/*   Essential META Tags */}
        <meta property="og:title" content={this.state.title} />
        <meta property="og:description" content={this.state.description} />
        <meta property="og:image" content={this.state.imageUrl} />
        <meta property="og:url" content={this.state.siteUrl} />
        <meta name="twitter:card" content="summary_large_image" />

        {/*  Non-Essential, But Recommended */}
        <meta property="og:site_name" content={this.state.siteName} />
        <meta name="twitter:image:alt" content={this.state.imageAlt} />

        {/* Non-Essential, But Required for Analytics */}
        <meta property="fb:app_id" content="your_app_id" />
        <meta name="twitter:site" content={this.state.twitterUsername} />
      </MetaTags>
    )
  }
}

export default Meta