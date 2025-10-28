import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";
import { Upload, DollarSign, CheckCircle } from "lucide-react";
import { useState } from "react";
import { Input } from "@mui/material";
import { Textarea } from "../ui/Textarea";
import { Button } from "../ui/Button";

const SellerPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    isbn: "",
    condition: "",
    description: "",
    price: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Book listing submitted successfully!");
    setFormData({
      title: "",
      author: "",
      isbn: "",
      condition: "",
      description: "",
      price: "",
    });
  };

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-serif font-bold text-foreground mb-4">
            Sell Your Books
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Turn your books into cash. We offer competitive prices for quality
            books in all conditions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Steps */}
          <Card className="border-border shadow-card">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Upload className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="font-serif">1. List Your Book</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Fill out the form with your book details and upload photos
              </p>
            </CardContent>
          </Card>

          <Card className="border-border shadow-card">
            <CardHeader>
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <DollarSign className="h-6 w-6 text-accent" />
              </div>
              <CardTitle className="font-serif">2. Get an Offer</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Receive a fair price quote within 24 hours
              </p>
            </CardContent>
          </Card>

          <Card className="border-border shadow-card">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="font-serif">3. Ship & Get Paid</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Ship your book with our prepaid label and receive payment
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Form */}
        <Card className="max-w-3xl mx-auto border-border shadow-elegant">
          <CardHeader>
            <CardTitle className="text-2xl font-serif">Book Details</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Book Title *
                  </label>
                  <Input
                    required
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    placeholder="Enter book title"
                    className="border-input"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Author *
                  </label>
                  <Input
                    required
                    value={formData.author}
                    onChange={(e) =>
                      setFormData({ ...formData, author: e.target.value })
                    }
                    placeholder="Enter author name"
                    className="border-input"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    ISBN
                  </label>
                  <Input
                    value={formData.isbn}
                    onChange={(e) =>
                      setFormData({ ...formData, isbn: e.target.value })
                    }
                    placeholder="Enter ISBN number"
                    className="border-input"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Condition *
                  </label>
                  <Input
                    required
                    value={formData.condition}
                    onChange={(e) =>
                      setFormData({ ...formData, condition: e.target.value })
                    }
                    placeholder="e.g., Like New, Good, Acceptable"
                    className="border-input"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Asking Price *
                  </label>
                  <Input
                    required
                    type="number"
                    value={formData.price}
                    onChange={(e) =>
                      setFormData({ ...formData, price: e.target.value })
                    }
                    placeholder="$0.00"
                    className="border-input"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Description
                </label>
                <Textarea
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  placeholder="Describe the book's condition, any special features, or notes"
                  rows={4}
                  className="border-input"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Submit Book for Review
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default SellerPage;
