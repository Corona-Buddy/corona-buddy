/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import { useState, useEffect } from "react"
import styled from "@emotion/styled"

import Gun from "gun/gun"
import gunNts from "gun/nts"

import Layout from "../components/layout"
import SEO from "../components/seo"

// https://github.com/amark/gun/blob/master/examples/chat/index.html

const gun = Gun(window.location.origin + "/gun")
const chat = gun.get("converse/" + window.location.hash.slice(1))

// $(".chat__submit").on("click", submit)
// $(".chat_form").on("keydown", enter)
// function enter(e) {
//   if (e.which !== 13) {
//     return
//   }
//   submit(e)
// }
// function submit(e) {
//   e.preventDefault()

//   var msg = { when: Gun.time.is() }

//   msg.who = $(".chat__name-input").val()
//   if (!msg.who) {
//     msg.who = "user" + Gun.text.random(3)
//     $(".chat__name-input").val(msg.who)
//   }

//   msg.what = $(".chat__message-input").val()
//   if (!msg.what) {
//     return
//   }

//   chat.set(msg)
//   $(".chat__message-input")
//     .val("")
//     .focus()
// }

// chat.map().val(function(msg, id) {
//   if (!msg) {
//     return
//   }
//   var messageList = $(".chat__message-list")
//   var last = sort(msg.when, messageList.children("li").last())

//   var li = $("#msg-" + id)[0] // grab if exists
//   if (!li) {
//     li = $(".model li")
//       .clone(true) // else create it
//       .attr("id", "msg-" + id)
//       .insertAfter(last)
//   }

//   // bind the message data into the UI
//   li = $(li)
//   li.find(".chat__name").text(msg.who)
//   li.find(".chat__message-text").text(msg.what)
//   li.find(".sort").text(msg.when)

//   var time = new Date(msg.when)
//   li.find(".chat__when").text(
//     time.toDateString() + ", " + time.toLocaleTimeString()
//   )

//   $("html, body")
//     .stop(true, true)
//     .animate({ scrollTop: messageList.height() })
// })

// function sort(num, li) {
//   return parseFloat(num) >=
//     parseFloat(
//       $(li)
//         .find(".sort")
//         .text() || -Infinity
//     )
//     ? li
//     : sort(num, li.prev())
// }

function handleSubmit(e) {
  if (e) e.preventDefault()

  var msg = {
    when: Gun.time.is(),
    who: "example",
    what: "TEXTO",
  }

  // msg.who = $('.chat__name-input').val();
  // if (!msg.who) {
  //   msg.who = 'user' + Gun.text.random(3);
  //   $('.chat__name-input').val(msg.who);
  // }

  // msg.what = $('.chat__message-input').val();
  // if (!msg.what) { return }
  console.log(msg)
  chat.set(msg)
}

setTimeout(handleSubmit, 5000)

const IndexPage = () => {
  const [posts, setPosts] = useState([])
  // useEffect(() => {
  //   chat.map().val(function(msg, id) {
  //     if (!msg) {
  //       return false
  //     }
  //     const lastPostIndex = posts.findIndex(x => x["_"]["#"] === id)
  //     console.log("RING", msg)
  //     if (lastPostIndex === -1) {
  //       setPosts([...posts, msg])
  //     }
  //   })
  // })
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hey Buddy</h1>
      <p>
        Das ist eine App zum Austausch von Personen zu Zeiten der Corona
        Isolation.
        <br />
        Du möchtest zuhören oder dich mitteilen. Dann leg direkt los.
        <br />
        Alles anonym und vertraulich (kein Online-Datenspeicher).
      </p>
      <div>
        {posts.length
          ? posts.map(p => <div key={p.id}>{JSON.stringify(p)}</div>)
          : "Keine Nachrichten"}
      </div>
      <div
        css={css`
          margin-bottom: 1em;
        `}
      >
        <Button>👂 Ich hör gerne zu</Button>
        <Button
          css={css`
            margin-left: 1em;
          `}
        >
          🤫 Ich hab etwas auf dem Herzen
        </Button>
      </div>
    </Layout>
  )
}

const Button = styled.button`
  > span.icon {
    font-size: 2em;
  }
`

export default IndexPage
