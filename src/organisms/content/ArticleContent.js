import React from 'react'
import PropTypes from 'prop-types'

const ArticleContent = ({ title, description, featured, className }) => {
  return (
    <>
      <section className="l-grid l-grid--7-col u-shift--left--1-col--at-xxlarge l-grid-wrap--6-of-7 u-spacing--double--until-large">
        <div className="c-article l-grid-item l-grid-item--l--4-col l-grid-item--xl--3-col">
          <article className="text c-article__body u-spacing--double has-dropcap">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
              <a href="">Donec malesuada</a>, est ut viverra euismod, dui dolor
              gravida massa, sed aliquam ex nisl ut metus. Mauris at ante
              laoreet, gravida odio gravida, fermentum lectus. Fusce ac
              sollicitudin purus. Morbi et diam nunc. Praesent fringilla magna
              nisl, et volutpat nisi tincidunt aliquet. In laoreet ligula vel
              porttitor condimentum. In mattis ultricies placerat. Morbi
              interdum hendrerit tempus. Donec consequat elit vitae justo
              ornare, eget elementum quam consequat. Quisque auctor ex et congue
              finibus. Proin sed nisl ac velit aliquam euismod non tincidunt
              lectus. In enim ex, commodo feugiat porttitor sed, eleifend vitae
              ipsum. Suspendisse lorem nisl, suscipit at tellus quis, porttitor
              convallis sem.
            </p>
            {/* {% if blockquote %}
        {% include '@atoms/text/blockquote.twig' %}
      {% endif %} */}
            <p>
              <a href="">
                Vestibulum ipsum orci, egestas eu erat non, posuere maximus
                quam.
              </a>{' '}
              Quisque tincidunt turpis id accumsan hendrerit. Cras eleifend,
              arcu sit amet faucibus blandit, dolor urna euismod sem, non
              molestie nulla nulla porta nibh. Integer commodo arcu vitae nisl
              iaculis, non hendrerit arcu sodales. Vivamus sagittis quam ut elit
              posuere ultrices. In blandit erat orci, vitae posuere enim
              vehicula quis. Nullam posuere mauris odio, eu facilisis lorem
              iaculis ut. Aenean tortor turpis, sollicitudin ut est eget, mattis
              feugiat arcu. Etiam est magna, aliquet ut blandit sit amet,
              malesuada a lacus. Nam scelerisque arcu non sem auctor molestie.
              Vestibulum sit amet congue ex.
            </p>
          </article>
        </div>
        <div className="c-sidebar l-grid-item l-grid-item--l--2-col l-grid-item--xl--2-col u-padding--zero--sides">
          {/* {% if related_posts %}
      {% include '@organisms/asides/related-posts.twig' %}
    {% endif %} */}
        </div>
      </section>
      {/* {% if figure_breakout %}
   <section className="l-grid l-grid--7-col l-grid-wrap l-grid-wrap--6-of-7">
     <div className="u-width--100p u-padding--zero--sides">
       {% include '@molecules/media/breakout-image.twig' %}
     </div>
   </section>
 {% endif %} */}
      <section className="l-grid l-grid--7-col u-shift--left--1-col--at-xxlarge l-grid-wrap l-grid-wrap--6-of-7">
        <article className="c-article l-grid-item l-grid-item--l--4-col l-grid-item--xl--3-col">
          <div className="text c-article__body u-spacing--double">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              malesuada, est ut viverra euismod, dui dolor gravida massa, sed
              aliquam ex nisl ut metus. Mauris at ante laoreet, gravida odio
              gravida, fermentum lectus. Fusce ac sollicitudin purus. Morbi et
              diam nunc. Praesent fringilla magna nisl, et volutpat nisi
              tincidunt aliquet. In laoreet ligula vel porttitor condimentum. In
              mattis ultricies placerat. Morbi interdum hendrerit tempus. Donec
              consequat elit vitae justo ornare, eget elementum quam consequat.
              Quisque auctor ex et congue finibus. Proin sed nisl ac velit
              aliquam euismod non tincidunt lectus. In enim ex, commodo feugiat
              porttitor sed, eleifend vitae ipsum. Suspendisse lorem nisl,
              suscipit at tellus quis, porttitor convallis sem.
            </p>
            {/* {% if figure_with_caption %}
        <div className="u-shift--right--1-col--at-medium">
          {% include '@molecules/media/figure-with-caption.twig' %}
        </div>
      {% endif %} */}
            <p>
              Vestibulum ipsum orci, egestas eu erat non, posuere maximus quam.
              Quisque tincidunt turpis id accumsan hendrerit. Cras eleifend,
              arcu sit amet faucibus blandit, dolor urna euismod sem, non
              molestie nulla nulla porta nibh. Integer commodo arcu vitae nisl
              iaculis, non hendrerit arcu sodales. Vivamus sagittis quam ut elit
              posuere ultrices. In blandit erat orci, vitae posuere enim
              vehicula quis. Nullam posuere mauris odio, eu facilisis lorem
              iaculis ut. Aenean tortor turpis, sollicitudin ut est eget, mattis
              feugiat arcu. Etiam est magna, aliquet ut blandit sit amet,
              malesuada a lacus. Nam scelerisque arcu non sem auctor molestie.
              Vestibulum sit amet congue ex.
            </p>
          </div>
        </article>
      </section>
      {/* {% if figure_split %}
   <section className="l-grid l-grid--7-col l-grid-wrap l-grid-wrap--6-of-7">
     <div className="l-grid-item--m--3-col u-padding--zero--left">
       {% include '@molecules/media/figure-with-caption.twig' %}
     </div>
     <div className="l-grid-item--m--3-col u-padding--zero--left">
       {% include '@molecules/media/figure-with-caption.twig' %}
     </div>
   </section>
 {% endif %} */}
      <section className="l-grid l-grid--7-col u-shift--left--1-col--at-xxlarge l-grid-wrap l-grid-wrap--6-of-7">
        <article className="c-article l-grid-item l-grid-item--l--4-col l-grid-item--xl--3-col">
          <div className="text c-article__body u-spacing--double">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              malesuada, est ut viverra euismod, dui dolor gravida massa, sed
              aliquam ex nisl ut metus. Mauris at ante laoreet, gravida odio
              gravida, fermentum lectus. Fusce ac sollicitudin purus. Morbi et
              diam nunc. Praesent fringilla magna nisl, et volutpat nisi
              tincidunt aliquet. In laoreet ligula vel porttitor condimentum. In
              mattis ultricies placerat. Morbi interdum hendrerit tempus. Donec
              consequat elit vitae justo ornare, eget elementum quam consequat.
              Quisque auctor ex et congue finibus. Proin sed nisl ac velit
              aliquam euismod non tincidunt lectus. In enim ex, commodo feugiat
              porttitor sed, eleifend vitae ipsum. Suspendisse lorem nisl,
              suscipit at tellus quis, porttitor convallis sem.
            </p>
            {/* {% if highlight %}
        {% include '@molecules/text/highlight.twig' %}
      {% endif %} */}
            <p>
              Vestibulum ipsum orci, egestas eu erat non, posuere maximus quam.
              Quisque tincidunt turpis id accumsan hendrerit. Cras eleifend,
              arcu sit amet faucibus blandit, dolor urna euismod sem, non
              molestie nulla nulla porta nibh. Integer commodo arcu vitae nisl
              iaculis, non hendrerit arcu sodales. Vivamus sagittis quam ut elit
              posuere ultrices. In blandit erat orci, vitae posuere enim
              vehicula quis. Nullam posuere mauris odio, eu facilisis lorem
              iaculis ut. Aenean tortor turpis, sollicitudin ut est eget, mattis
              feugiat arcu. Etiam est magna, aliquet ut blandit sit amet,
              malesuada a lacus. Nam scelerisque arcu non sem auctor molestie.
              Vestibulum sit amet congue ex.
            </p>
            {/* {% if gallery_block %}
        {% include '@molecules/blocks/gallery-block.twig' %}
      {% endif %} */}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              malesuada, est ut viverra euismod, dui dolor gravida massa, sed
              aliquam ex nisl ut metus. Mauris at ante laoreet, gravida odio
              gravida, fermentum lectus. Fusce ac sollicitudin purus. Morbi et
              diam nunc. Praesent fringilla magna nisl, et volutpat nisi
              tincidunt aliquet. In laoreet ligula vel porttitor condimentum. In
              mattis ultricies placerat. Morbi interdum hendrerit tempus. Donec
              consequat elit vitae justo ornare, eget elementum quam consequat.
              Quisque auctor ex et congue finibus. Proin sed nisl ac velit
              aliquam euismod non tincidunt lectus. In enim ex, commodo feugiat
              porttitor sed, eleifend vitae ipsum. Suspendisse lorem nisl,
              suscipit at tellus quis, porttitor convallis sem.
            </p>
            {/* {% if story_block %}
        {% include '@molecules/blocks/content-block-expand.twig' %}
      {% endif %} */}
            <div>
              {/* {% include '@organisms/sections/article-footer.twig' %} */}
            </div>
          </div>
        </article>
        <div className="c-sidebar l-grid-item l-grid-item--m--2-col l-grid-item--l--2-col" />
      </section>
    </>
  )
}

ArticleContent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  className: PropTypes.string,
  featured: PropTypes.bool,
}

ArticleContent.defaultProps = {
  className: '',
  featured: false,
}

export default ArticleContent
