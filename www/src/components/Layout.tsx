import { Flex } from "@artsy/palette"
import { ContentArea } from "components/ContentArea"
import { Sidebar } from "components/Sidebar"
import React from "react"

const Layout = ({ children }) => {
  return (
    <>
      <Flex p={2}>
        <Sidebar />
        <Flex flexDirection="column" pt={4} mx={6}>
          {children}
          <br />
          <br />
          <ContentArea />
        </Flex>
      </Flex>
    </>
  )
}

export default Layout