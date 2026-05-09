"use client";

import { useState } from "react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import Input from "@/components/form/Input";

export default function ProductManagement() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !price || !image) {
      setError("All fields are required");
      return;
    }
    console.log({ name, price, image });
    setError("");
    alert("Product uploaded successfully!");
  };

  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="medium"
      background="circleGradient"
      cardStyle="glass-elevated"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered navItems={[{name: "Home", id: "/"}, {name: "Dashboard", id: "/product-management"}]} brandName="novamart" />
      </div>
      <div className="container mx-auto py-20 px-4">
        <h1 className="text-3xl font-bold mb-8">Product Management Dashboard</h1>
        <form onSubmit={handleSubmit} className="max-w-md space-y-4">
          {error && <p className="text-red-500">{error}</p>}
          <Input value={name} onChange={setName} placeholder="Product Name" required />
          <Input value={price} onChange={setPrice} placeholder="Price ($)" required />
          <Input value={image} onChange={setImage} placeholder="Image URL" required />
          <button type="submit" className="w-full py-2 bg-primary text-white rounded">Upload Product</button>
        </form>
      </div>
    </ThemeProvider>
  );
}
