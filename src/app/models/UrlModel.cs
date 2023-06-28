using System.ComponentModel.DataAnnotations;

namespace UrlModel{
    public class Url {

        [Key]
        public int Id {get;set;};

        [Required]
        [Url]
        public string OriginalUrl { get; set; };

        [Required]
        [StringLength(6)]
        public string ShortUrl { get; set;}
    }
}
