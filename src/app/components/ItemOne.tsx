import React from "react"

export default async function ItemOne() {
  console.log("Fetching revenue data...")

  await new Promise((resolve) => setTimeout(resolve, 3000))

  return <div>111111111111111</div>
}
