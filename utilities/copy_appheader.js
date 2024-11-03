import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function copy_appHeader(projectName,template_choices) {
    let basePath,destination,destinationPath;
    let app_header_content=`
    import React, { useState, useEffect } from "react";
import {
  BorderItem,
  BorderLayout,
  Button,
  StackLayout,
  FlexLayout,
  NavigationItem,
  FlexItem,
  Drawer,
} from "@salt-ds/core";
import { MenuIcon, CloseIcon, UserBadgeIcon } from "@salt-ds/icons";

const AppHeader = () => {
  const [offset, setOffset] = useState(0);
  const isMobile = false;

  const setScroll = () => {
    setOffset(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", setScroll);
    return () => {
      window.removeEventListener("scroll", setScroll);
    };
  }, []);

  const DesktopAppHeader = ({ items, utilities }) => {
    const [active, setActive] = useState(items?.[0]);

    return (
      <header>
        <FlexLayout
          style={{
            padding: "1rem 2rem",
            background:
              "linear-gradient(135deg, var(--salt-color-blue-10), var(--salt-color-purple-20))",
            position: "fixed",
            width: "100%",
            boxShadow: offset > 0 ? "0 8px 16px rgba(0, 0, 0, 0.1)" : "none",
            borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
            zIndex: 1000,
          }}
          justify="space-between"
          align="center"
          gap={3}
        >
          <FlexItem align="center">
            <h1
              style={{
                color: "#fff",
                fontWeight: "bold",
                fontSize: "1.5rem",
              }}
            >
              Salt APP
            </h1>
          </FlexItem>

          <nav>
            <ul
              style={{
                display: "flex",
                listStyle: "none",
                padding: "0",
                margin: "0",
              }}
            >
              {items?.map((item) => (
                <li key={item}>
                  <NavigationItem
                    active={active === item}
                    href={item.toLowerCase()}
                    onClick={() => setActive(item)}
                    style={{
                      color: active === item ? "#6a5acd" : "#fff",
                      padding: "0.5rem 1rem",
                      transition: "color 0.3s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#4b6cb7")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color =
                        active === item ? "#6a5acd" : "#fff")
                    }
                  >
                    {item}
                  </NavigationItem>
                </li>
              ))}
            </ul>
          </nav>

          <FlexItem align="center">
            <StackLayout direction="row" gap={2}>
              {utilities?.map((utility) => (
                <Button key={utility.key} variant="secondary">
                  {utility.icon}
                </Button>
              ))}
            </StackLayout>
          </FlexItem>
        </FlexLayout>
      </header>
    );
  };

  const MobileAppHeader = ({ items, utilities }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [active, setActive] = useState(items?.[0]);

    return (
      <header>
        <FlexLayout
          style={{
            width: "100%",
            height: "64px",
            background:
              "linear-gradient(135deg, var(--salt-color-blue-10), var(--salt-color-purple-20))",
            position: "fixed",
            top: 0,
            zIndex: 1000,
            borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
          }}
          justify="space-between"
          align="center"
          gap={3}
        >
          <FlexItem>
            <Button
              onClick={() => setDrawerOpen(!drawerOpen)}
              variant="secondary"
            >
              {drawerOpen ? <CloseIcon /> : <MenuIcon />}
            </Button>
          </FlexItem>

          <FlexItem align="center">
            <h1
              style={{
                color: "#fff",
                fontWeight: "bold",
                fontSize: "1.25rem",
              }}
            >
              Salt APP
            </h1>
          </FlexItem>
        </FlexLayout>

        <Drawer
          style={{
            background:
              "linear-gradient(135deg, var(--salt-color-blue-10), var(--salt-color-purple-20))",
            color: "#fff",
            paddingTop: "64px",
            paddingLeft: "0",
          }}
          open={drawerOpen}
          onOpenChange={() => setDrawerOpen(!drawerOpen)}
        >
          <nav>
            <ul
              style={{
                listStyle: "none",
                padding: "0",
              }}
            >
              {items?.map((item) => (
                <li key={item}>
                  <NavigationItem
                    orientation="vertical"
                    active={active === item}
                    href="#"
                    onClick={() => {
                      setActive(item);
                      setDrawerOpen(false);
                    }}
                    style={{
                      padding: "1rem",
                      transition: "color 0.3s ease",
                      color: active === item ? "#6a5acd" : "#fff",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#4b6cb7")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color =
                        active === item ? "#6a5acd" : "#fff")
                    }
                  >
                    {item}
                  </NavigationItem>
                </li>
              ))}
            </ul>
          </nav>
        </Drawer>
      </header>
    );
  };

  const items = ${JSON.stringify(template_choices)};
  const utilities = [
    {
      icon: <UserBadgeIcon size={2} />,
      key: "User",
    },
  ];

  return (
    <BorderLayout>
      <BorderItem position="north">
        {isMobile ? (
          <MobileAppHeader items={items} utilities={utilities} />
        ) : (
          <DesktopAppHeader items={items} utilities={utilities} />
        )}
      </BorderItem>
    </BorderLayout>
  );
};

export default AppHeader;

    `;
    let relativePath = `${
      path.sep + "templates" + path.sep + "appheader"+path.sep+
      "AppHeader.js"
    }`;
    
      basePath= process.cwd();
      destinationPath = `${projectName + path.sep}`;
      destination = basePath + path.sep + destinationPath +"src"+ relativePath;
      const dir = path.dirname(destination);

fs.mkdir(dir, { recursive: true }, (err) => {
  if (err) {
    console.error(`Error creating directory ${dir}: ${err.message}`);
    return;
  }
      fs.writeFile(destination, app_header_content, "utf-8", (err) => {
        if (err) {
          console.error(`Error writing to AppHeader.js: ${err.message}`);
          return;
        }
        console.log(`Content has been successfully written to ${destination}`);
      });
    });
}

export default copy_appHeader;