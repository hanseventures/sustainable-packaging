import { graphql, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';

const FAQv2 = props => {
  const { componentsJson } = useStaticQuery(graphql`
    query TextFAQv2Query {
      componentsJson {
        title
        faqs {
          title
          text
        }
      }
    }
  `)

  const [currentModal, setOpenCurrentModal] = useState('')

  const toggleModal = (e, id) => {
    if (e.target.nodeName === 'DIV' && id === '') {
      setOpenCurrentModal('')
    } else if (
      e.target.nodeName === 'BUTTON' ||
      e.target.nodeName === 'STRONG'
    ) {
      setOpenCurrentModal(id)
    } else if (
      e.target.nodeName === 'DIV' &&
      !e.target.parentElement.parentElement.classList.contains('is-open')
    ) {
      setOpenCurrentModal(id)
    }
  }

  return (
    <section
      className='l-faq-v2 container bg-primary'
      itemScope
      itemType='https://schema.org/FAQPage'
    >
      <div className='content content--roomy'>
        <div className='trimmed-2 text-xs-center'>
          <h3 className='mt-0'>
            <span className='highlight mb-2 d-none'>So geht's</span>
            FAQ's
          </h3>
          <span className='mb-2 d-none'>{componentsJson.title}</span>
        </div>

        <div className='faq-wrapper trimmed-2 mt-5'>
          {componentsJson.faqs.map((node, id) => (
            <article
              key={id}
              className={`mb-1 ${currentModal === id ? 'is-open' : ''}`}
            >
              <button
                type='button'
                onClick={e => toggleModal(e, id)}
                className='faq--collapsible pos-relative text-xs-left p-3'
              >
                <div
                  className='plus-animated p-3'
                  onClick={e => toggleModal(e, '')}
                >
                  <div className='vertical'></div>
                  <div className='horizontal'></div>
                </div>
                <strong>{node.title}</strong>
              </button>
              <div className='faq--content animate__animated animate__fadeIn p-3'>
                <p dangerouslySetInnerHTML={{ __html: node.text }}></p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
export default FAQv2
