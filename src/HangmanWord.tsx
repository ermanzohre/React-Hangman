import React from "react"

export const HangmanWord = () => {
  const word = "Test"
  return (
    <div
      style={{
        display: "flex",
        gap: ".25rem",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
      }}
    >
      {word.split("").map((letter, index) => (
        <span style={{ borderBottom: ".1em solid black" }}>
          <span
            style={{
              visibility: "hidden",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  )
}
